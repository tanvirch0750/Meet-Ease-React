import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Swal from 'sweetalert2';

import { zodResolver } from '@hookform/resolvers/zod';

import { useEffect } from 'react';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@/components/ui/select';

import { useGetRoomsQuery } from '@/redux/features/room/roomApi';
import { useEditSlotMutation } from '@/redux/features/slots/slotsApi';
import { ISlot } from '@/types/slotType';
import { IRoom } from '@/types/roomType';

const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(time);
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  }
);
const slotFormSchema = z.object({
  date: z.string().refine(
    (date) => {
      const regex = /^\d{4}-\d{2}-\d{2}$/; // Matches "YYYY-MM-DD"
      return regex.test(date);
    },
    {
      message: 'Invalid date format, expected "YYYY-MM-DD".',
    }
  ),
  startTime: timeStringSchema,
  endTime: timeStringSchema,
  room: z.string().nonempty({ message: 'Room is required' }),
});

type SlotFormValues = z.infer<typeof slotFormSchema>;

export default function EditSlotForm({ slot }: { slot: ISlot }) {
  const { data: rooms } = useGetRoomsQuery({
    page: 1,
    limit: 100,
  });

  const form = useForm<SlotFormValues>({
    resolver: zodResolver(slotFormSchema),
    defaultValues: {
      date: slot?.date,
      startTime: slot?.startTime,
      endTime: slot?.endTime,
      room: slot?.room?._id,
    },
    mode: 'onChange',
  });

  const [editSlot, { isLoading, isError, isSuccess, error }] =
    useEditSlotMutation();

  function onSubmit(data: SlotFormValues) {
    console.log(data);

    editSlot({ id: slot._id, data });
  }

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Slot Updated Successfully',
        showConfirmButton: false,

        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Slot Update Failed',
        // @ts-ignore
        text: `Reason: ${error?.data?.message}`,
        icon: 'error',
        showConfirmButton: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border p-4 md:p-8 rounded-md mt-4 md:mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input placeholder="2024-12-25" {...field} />
                </FormControl>
                <FormDescription>
                  Date should be in this format, "YYYY-MM-DD"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Room Number</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Room" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {rooms?.data?.map((room: IRoom) => (
                      <SelectItem value={room?._id} key={room?._id}>
                        {room?.name} - {room?.roomNo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Time</FormLabel>
                <FormControl>
                  <Input placeholder="10:00" {...field} />
                </FormControl>
                <FormDescription>
                  Start Time should be, "HH:MM" in 24 hours format
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Time</FormLabel>
                <FormControl>
                  <Input placeholder="15:00" {...field} />
                </FormControl>
                <FormDescription>
                  End Time should be, "HH:MM" in 24 hours format
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} type="submit" className=" font-semibold">
          {isLoading ? 'Loading...' : 'Update Slot'}
        </Button>
      </form>
    </Form>
  );
}

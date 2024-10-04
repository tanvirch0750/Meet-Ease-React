import { z } from 'zod';
import { useFieldArray, useForm } from 'react-hook-form';
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
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { useEditRoomMutation } from '@/redux/features/room/roomApi';
import { useGetCaegoriesQuery } from '@/redux/features/category/categoryApi';
import { IRoom } from '@/types/roomType';
import { ICategory } from '@/types/categoryType';

const roomFormSchema = z.object({
  name: z.string({ message: 'Room name is required' }),
  description: z.string({ message: 'Description is required' }),
  roomNo: z.string({ message: 'Room number is required' }),
  floorNo: z.string({ message: 'Floor number is required' }),
  capacity: z.string({ message: 'Capacity is required' }),
  pricePerSlot: z.string({ message: 'Price per slot is required' }),
  amenities: z.array(
    z.object({
      value: z.string({ message: 'Please enter a amenity.' }),
    })
  ),
  images: z.array(
    z.object({
      value: z.string().url({ message: 'Please enter a valid image URL.' }),
    })
  ),
  category: z.string().nonempty({ message: 'Category is required' }),
});

type RoomFormValues = z.infer<typeof roomFormSchema>;

export default function EditRoomForm({ room }: { room: IRoom }) {
  const { data: categories } = useGetCaegoriesQuery({
    page: 1,
    limit: 100,
  });

  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomFormSchema),
    defaultValues: {
      name: room?.name,
      roomNo: room?.roomNo.toString(),
      floorNo: room?.floorNo.toString(),
      capacity: room?.capacity.toString(),
      pricePerSlot: room?.pricePerSlot.toString(),
      description: room?.description,
      // @ts-ignore
      amenities: room?.amenities?.map((item) => ({ value: item })),
      // @ts-ignore
      images: room?.images?.map((item) => ({ value: item })),
      category: room?.category?._id,
    },
    mode: 'onChange',
  });

  const { fields: amenitiesFields, append: amenitiesAppend } = useFieldArray({
    name: 'amenities',
    control: form.control,
  });

  const { fields: imagesFields, append: imagesAppend } = useFieldArray({
    name: 'images',
    control: form.control,
  });

  const [editRoom, { isLoading, isError, isSuccess, error }] =
    useEditRoomMutation();

  function onSubmit(data: RoomFormValues) {
    const convertedData = {
      name: data.name,
      description: data.description,
      roomNo: parseInt(data.roomNo),
      floorNo: parseInt(data.floorNo),
      capacity: parseInt(data.capacity),
      pricePerSlot: parseInt(data.pricePerSlot),
      amenities: data.amenities.map((a) => a.value),
      images: data.images.map((i) => i.value),
      category: data.category,
    };

    console.log(data);

    editRoom({ id: room._id, data: convertedData });
  }

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Room Updated Successfully',
        showConfirmButton: false,

        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Room Update Failed',
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Name</FormLabel>
                <FormControl>
                  <Input placeholder="Room Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roomNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Number</FormLabel>
                <FormControl>
                  <Input placeholder="Room Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <FormField
            control={form.control}
            name="floorNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Floor Number</FormLabel>
                <FormControl>
                  <Input placeholder="Floor Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Capacity</FormLabel>
                <FormControl>
                  <Input placeholder="Room Capacity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <FormField
            control={form.control}
            name="pricePerSlot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Slot</FormLabel>
                <FormControl>
                  <Input placeholder="Price Per Slot" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Select Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="">
                    {categories?.data?.map((category: ICategory) => (
                      // @ts-ignore
                      <SelectItem value={category?._id} key={category?._id}>
                        {category?.name}
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
          <div>
            {amenitiesFields?.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`amenities.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Amenities
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                      Add Amenities for the room
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => amenitiesAppend({ value: '' })}
            >
              Add Amenity (atlest 3 amenity)
            </Button>
          </div>

          <div>
            {imagesFields?.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`images.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Images
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                      Add image url
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => imagesAppend({ value: '' })}
            >
              Add Image (4 image)
            </Button>
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Room Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit" className=" font-semibold">
          {isLoading ? 'Loading...' : 'Update Room'}
        </Button>
      </form>
    </Form>
  );
}

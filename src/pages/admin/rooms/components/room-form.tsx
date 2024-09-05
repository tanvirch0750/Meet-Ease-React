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
import { useAddRoomMutation } from '@/redux/features/room/roomApi';

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

export default function RoomForm({
  defaultValues,
}: {
  defaultValues?: Partial<RoomFormValues>;
}) {
  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomFormSchema),
    defaultValues,
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

  const [addRoom, { isLoading, isError, isSuccess, error }] =
    useAddRoomMutation();

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

    console.log(convertedData);

    addRoom(convertedData);
  }

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Room Created Successfully',
        showConfirmButton: false,

        timer: 3000,
      });

      form.reset({
        name: '',
        description: '',
        roomNo: '',
        floorNo: '',
        capacity: '',
        pricePerSlot: '',
        amenities: [],
        images: [],
        category: '',
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Room Createion Failed',
        // @ts-ignore
        text: `Reason: ${error?.data?.message!}`,
        icon: 'error',
      });
    }
  }, [isSuccess, isError]);

  console.log(error);

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
                <FormLabel>Room Number</FormLabel>
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
              <FormItem>
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
                  <SelectContent>
                    <SelectItem value="66d9ae4534c6b2313287d657">
                      m@example.com
                    </SelectItem>
                    <SelectItem value="dfdf">m@google.com</SelectItem>
                    <SelectItem value="fdf">m@support.com</SelectItem>
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
          {isLoading ? 'Loading...' : 'Create Room'}
        </Button>
      </form>
    </Form>
  );
}

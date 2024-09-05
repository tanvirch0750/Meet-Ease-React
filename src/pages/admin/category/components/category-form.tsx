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
import { useAddCategoryMutation } from '@/redux/features/category/categoryApi';
import { useEffect } from 'react';

const categoryFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name be at least 2 characters.',
    })
    .max(40, {
      message: 'Name not be longer than 30 characters.',
    }),
});

type CategoryFormValues = z.infer<typeof categoryFormSchema>;

export default function CategoryForm({
  defaultValues,
}: {
  defaultValues?: Partial<CategoryFormValues>;
}) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [addCategory, { isLoading, isError, isSuccess }] =
    useAddCategoryMutation();

  function onSubmit(data: CategoryFormValues) {
    console.log(data);

    addCategory(data);

    form.reset({
      name: '',
    });
  }

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Category Crated Successfully',
        showConfirmButton: false,

        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There was an error, please try agin',

        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess, isError]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border p-4 md:p-8 rounded-md mt-4 md:mt-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="Presentation room" {...field} />
              </FormControl>
              <FormDescription>
                This is a field for creating room category. A category name must
                be unique.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isLoading} type="submit">
          {isLoading ? 'Loading...' : 'Create Category'}
        </Button>
      </form>
    </Form>
  );
}

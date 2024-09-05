import { Row } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { categorySchema } from '../data/schema';
import { Button } from '@/components/ui/button';
import { EditCategory } from './edit-category';
import { useDeleteCategoryMutation } from '@/redux/features/category/categoryApi';
import { useEffect } from 'react';
import { Trash2Icon } from 'lucide-react';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [deleteCategory, { isLoading, isError, isSuccess }] =
    useDeleteCategoryMutation();

  const category = categorySchema.parse(row.original);

  const handleDeleteCategory = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(category?._id);

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Unsuccessful',
        text: 'Your file has not been deleted.',
        icon: 'error',
      });
    }
    if (isLoading) {
      Swal.fire({
        title: 'Loading',
        text: 'Please wait a moment',
        icon: 'info',
      });
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <div className="flex items-center w-[100px] gap-2">
      <EditCategory category={category} />
      <Button
        className="px-2 dark:bg-black/70 dark:text-white/50"
        size="icon"
        onClick={handleDeleteCategory}
      >
        <Trash2Icon size={20} />
      </Button>
    </div>
  );
}

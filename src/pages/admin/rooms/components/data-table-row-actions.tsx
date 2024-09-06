import { Row } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDeleteRoomMutation } from '@/redux/features/room/roomApi';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [deleteRoom, { isLoading, isError, isSuccess }] =
    useDeleteRoomMutation();

  const navigate = useNavigate();

  const room = row.original;

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
        // @ts-ignore
        deleteRoom(room?._id);

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
      {/* <EditRoom room={room} /> */}
      <Button
        className="px-2 dark:bg-black/70 dark:text-white/50"
        size="icon"
        // @ts-ignore
        onClick={() => navigate(`/admin/dashboard/rooms/edit/${room?._id}`)}
      >
        <PencilIcon size={18} />
      </Button>
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

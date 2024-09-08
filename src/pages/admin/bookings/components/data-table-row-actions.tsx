import { Row } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { XIcon } from 'lucide-react';
import { useCancelBookingMutation } from '@/redux/features/bookings/bookingsApi';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [cancelBooking, { isLoading, isError, isSuccess }] =
    useCancelBookingMutation();

  const booking = row.original;

  const handleDeleteCategory = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, Cancel the booking',
    }).then((result) => {
      if (result.isConfirmed) {
        // @ts-ignore
        cancelBooking({ transactionId: booking?.trxId });
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        title: 'Canceled!',
        text: 'Your booking has been canceled.',
        icon: 'success',
      });
    }
    if (isError) {
      Swal.fire({
        title: 'Unsuccessful',
        text: 'Booking has not been canceled.',
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
        onClick={handleDeleteCategory}
        // @ts-ignore
        disabled={booking?.isConfirmed === 'cancelled'}
      >
        <XIcon size={20} />
      </Button>
    </div>
  );
}

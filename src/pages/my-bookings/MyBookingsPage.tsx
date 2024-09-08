import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Loader from '@/components/ui/loader';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetMyBookingsQuery } from '@/redux/features/bookings/myBookingsApi';

export default function MyBookingsPage() {
  const {
    data: bookings,
    isLoading,
    isError,
  } = useGetMyBookingsQuery({
    page: 1,
    limit: 10000,
  });

  console.log(bookings?.data);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper className=" pb-24 pt-10 text-gray-900">
        <h2 className=" mb-12 text-center font-bold text-3xl">My Bookings</h2>
        {isError || bookings?.data?.length < 0 ? (
          <div>
            <h2 className="text-center text-xl text-gray-900 mt-4">
              You did not confirmed any booking yet.
            </h2>
          </div>
        ) : (
          <Table className=" text-base border border-gray-300">
            <TableCaption className="text-gray-800">
              A list of your bookings.
            </TableCaption>
            <TableHeader>
              <TableRow className=" border-gray-300 bg-gray-200  hover:bg-gray-200">
                <TableHead className=" text-gray-800 font-semibold">
                  Room Name
                </TableHead>
                <TableHead className="text-gray-800 font-semibold">
                  Room Number
                </TableHead>
                <TableHead className="text-gray-800 font-semibold">
                  Date
                </TableHead>
                <TableHead className="text-gray-800 font-semibold">
                  Slot Time
                </TableHead>
                <TableHead className="text-gray-800 font-semibold">
                  Total
                </TableHead>
                <TableHead className="text-gray-800 font-semibold">
                  Trx Id
                </TableHead>
                <TableHead className="text-right text-gray-800 font-semibold">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {bookings?.data?.map((booking: any) => (
                <TableRow
                  key={booking?._id}
                  className=" border-gray-300 hover:bg-gray-200"
                >
                  <TableCell className="font-medium">
                    {booking?.room?.name}
                  </TableCell>
                  <TableCell>{booking?.room?.roomNo}</TableCell>
                  <TableCell>{booking?.date}</TableCell>

                  <TableCell>
                    {booking?.slots
                      ?.map((sl: any) => `${sl?.startTime} - ${sl?.endTime}`)
                      .join(', ')}
                  </TableCell>
                  <TableCell>{booking?.totalAmount}</TableCell>
                  <TableCell>{booking?.trxId}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        booking?.isConfirmed === 'confirmed'
                          ? 'bg-green-200 text-green-950 font-semibold px-2 py-1 rounded-lg'
                          : 'bg-red-200 text-red-950 font-semibold px-2 py-1 rounded-lg'
                      }
                    >
                      {booking?.isConfirmed}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

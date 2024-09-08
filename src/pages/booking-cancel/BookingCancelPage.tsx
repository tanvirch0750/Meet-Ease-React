import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { useCancelBookingMutation } from '@/redux/features/bookings/bookingsApi';
import { Loader } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function BookingCancelPage() {
  const { transactionId } = useParams();

  console.log('trx id', transactionId);

  const [cancelBooking, { isLoading, isError }] = useCancelBookingMutation();

  useEffect(() => {
    if (transactionId) {
      cancelBooking({ transactionId });
    }
  }, [transactionId]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper className=" max-w-5xl py-24">
        <Card className=" bg-white border border-gray-300">
          <CardContent className=" pt-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Booking is cancelled
            </h2>
            <Link to="/rooms">
              <Button>Go Back</Button>
            </Link>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Loader from '@/components/ui/loader';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { useAddBookingMutation } from '@/redux/features/bookings/bookingsApi';
import ErrorPage from '../error/ErrorPage';
import { ISlot } from '@/types/slotType';

export default function CheckoutPage({
  selectedSlots,
  user,
  setIsProccedToCheckout,
  date,
}: {
  selectedSlots: ISlot;
  user: any;
  setIsProccedToCheckout: any;
  date: any;
}) {
  const [addBooking, { isLoading, isError, isSuccess, data }] =
    useAddBookingMutation();

  console.log(selectedSlots);
  console.log(user);

  const room = selectedSlots[0].room;

  const handleAddBooking = () => {
    const slots = selectedSlots?.map((slot: any) => slot?._id);

    const bookdata = {
      date,
      slots,
      room: room?._id,
      user: user._id,
      totalAmount: selectedSlots?.length * room?.pricePerSlot,
    };

    addBooking(bookdata);

    console.log(bookdata);
  };

  if (isSuccess) {
    window.location.href = data?.data?.paymentSession?.payment_url;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <MaxWidthWrapper className=" max-w-7xl py-8 text-gray-900">
          <Card className=" bg-white text-gray-900 border-gray-300">
            <CardHeader className="">
              <div className=" flex justify-between items-center">
                <p className="text-xl font-semibold">
                  Pay with Amar Pay (Bkash, Nagad)
                </p>
                <Button
                  className=" bg-emerald-500 text-white hover:bg-emerald-600 hover:text-white"
                  onClick={() => setIsProccedToCheckout(false)}
                >
                  Go Back
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                <form className=" border border-gray-300 p-6 rounded-md">
                  <div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className="block text-lg font-medium"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder={user?.name}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
                      disabled
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-lg font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder={user?.email}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
                      disabled
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-lg font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder={user?.phone}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
                      disabled
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-lg font-medium"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder={user.address}
                      className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
                    />
                  </div>
                </form>
                <div className=" p-6 border border-gray-300 rounded-md">
                  <div className="bg-gray-100 p-4 rounded-lg mb-6 text-lg">
                    <div className="flex justify-between mb-2">
                      <span>Room Name:</span>
                      <span>{room?.name}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Room Number</span>
                      <span>{room?.roomNo}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Floor Number</span>
                      <span>{room?.floorNo}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Capacity</span>
                      <span>{room?.capacity}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Price Per Slot</span>
                      <span>{room?.pricePerSlot}</span>
                    </div>
                    <div className="flex justify-between font-semibold mb-2">
                      <span>Slot Selected</span>
                      <span>{selectedSlots?.length}</span>
                    </div>
                    <div className="flex justify-between font-semibold ">
                      <span>Total Price</span>
                      <span>{selectedSlots?.length * room?.pricePerSlot}</span>
                    </div>
                  </div>
                  <button
                    className="bg-emerald-500 text-white w-full py-3 rounded-md  hover:bg-emerald-600 text-xl font-bold"
                    onClick={handleAddBooking}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      )}
    </>
  );
}

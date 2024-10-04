import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Loader from '@/components/ui/loader';
import { useAddBookingMutation } from '@/redux/features/bookings/bookingsApi';
import ErrorPage from '../error/ErrorPage';
import { ISlot } from '@/types/slotType';
import { Label } from '@/components/ui/label';
import {
  Clock,
  CreditCard,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function CheckoutPage({
  selectedSlots,
  user,
  setIsProccedToCheckout,
  date,
}: {
  selectedSlots: any;
  user: any;
  setIsProccedToCheckout: any;
  date: any;
}) {
  const [addBooking, { isLoading, isError, isSuccess, data }] =
    useAddBookingMutation();

  const room = selectedSlots[0].room;
  console.log(selectedSlots);

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
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
          <Card className="max-w-5xl mx-auto overflow-hidden shadow-lg bg-white border-gray-200">
            <CardHeader className="bg-gradient-to-r from-emerald-400 to-teal-500 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <CardTitle className="text-3xl font-bold text-white text-center sm:text-left">
                  Pay with Amar Pay
                </CardTitle>
                <Button
                  className=" bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900"
                  onClick={() => setIsProccedToCheckout(false)}
                >
                  Go Back
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-lg font-medium text-gray-700 flex items-center gap-2"
                    >
                      <UserIcon className="w-5 h-5 text-emerald-500" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={user?.name}
                      className="bg-white border-gray-300 text-gray-900 disabled:opacity-95 disabled:font-semibold"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-lg font-medium text-gray-700 flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-emerald-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={user?.email}
                      className="bg-white border-gray-300 text-gray-900 disabled:opacity-95 disabled:font-semibold"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-lg font-medium text-gray-700 flex items-center gap-2"
                    >
                      <PhoneIcon className="w-5 h-5 text-emerald-500" />
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={user?.phone}
                      className="bg-white border-gray-300 text-gray-900 disabled:opacity-95 disabled:font-semibold"
                      readOnly
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-lg font-medium text-gray-700 flex items-center gap-2"
                    >
                      <MapPinIcon className="w-5 h-5 text-emerald-500" />
                      Address
                    </Label>
                    <Input
                      id="address"
                      value={user?.address}
                      className="bg-white border-gray-300 text-gray-900 disabled:opacity-95 disabled:font-semibold"
                      readOnly
                      disabled
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <Card className="bg-white shadow border-gray-100">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">
                          Room Name:
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {room?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">
                          Room Number:
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {room?.roomNo}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">
                          Floor Number:
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {room?.floorNo}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">
                          Capacity:
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {room?.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">
                          Price Per Slot:
                        </span>
                        <span className="text-gray-800 font-semibold">
                          {room?.pricePerSlot}
                        </span>
                      </div>
                      <Separator className="my-2 bg-slate-200" />
                      <div className="space-y-2">
                        <span className="font-medium text-gray-700 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-emerald-500" />
                          Selected Slots:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedSlots?.map((item: ISlot) => (
                            <span
                              key={item?._id}
                              className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {item?.startTime} - {item?.endTime}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Separator className="my-2 bg-gray-200" />
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-gray-700">Slots Selected:</span>
                        <span className="text-gray-900">
                          {selectedSlots?.length}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span className="text-gray-700">Total Price:</span>
                        <span className="text-emerald-600">
                          {selectedSlots?.length * room?.pricePerSlot}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Button
                    className="w-full py-6 text-xl font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors flex items-center justify-center gap-2"
                    onClick={handleAddBooking}
                  >
                    <CreditCard className="w-6 h-6" />
                    Pay now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}

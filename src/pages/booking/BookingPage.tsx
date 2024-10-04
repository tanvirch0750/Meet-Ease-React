import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/date-picker/date-picker';
import Footer from '@/components/footer/footer';
import { formatDateToYYYYMMDD } from '@/lib/utils';
import { useGetAvailableSlotsQuery } from '@/redux/features/slots/slotsApi';
import Loader from '@/components/ui/loader';
import { useParams } from 'react-router-dom';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import CheckoutPage from '../checkout/CheckoutPage';
import { useGetProfileDataQuery } from '@/redux/features/user/userApi';
import { ISlot } from '@/types/slotType';

export default function BookingPage() {
  const [date, setDate] = useState<Date>();
  const [isProccedToCheckout, setIsProccedToCheckout] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const { id } = useParams();
  const { data: room } = useGetRoomQuery(id!);
  const { data: user } = useGetProfileDataQuery('');

  const updatedDate = formatDateToYYYYMMDD(date as unknown as string);

  const {
    data: availableSlots,
    isLoading,
    isError,
  } = useGetAvailableSlotsQuery({
    page: 1,
    limit: 1000000,
    date: updatedDate ? updatedDate : '2024-01-01',
    roomId: id,
  });

  console.log('available slots', availableSlots);

  // Handle slot selection
  const handleSlotClick = (slot: any) => {
    // @ts-ignore
    if (selectedSlots.includes(slot)) {
      // Remove slot if it's already selected
      setSelectedSlots(selectedSlots.filter((s: ISlot) => s._id !== slot._id));
    } else {
      // Add slot to the selectedSlots array
      // @ts-ignore
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  // @ts-ignore
  const isSlotSelected = (slot) => selectedSlots.includes(slot);

  return (
    <>
      <Header pageType="normal" />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isProccedToCheckout ? (
            <CheckoutPage
              selectedSlots={selectedSlots}
              user={user.data}
              setIsProccedToCheckout={setIsProccedToCheckout}
              date={updatedDate}
            />
          ) : (
            <MaxWidthWrapper className="py-24">
              <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <h2 className=" text-3xl text-gray-800 mb-6">
                    Select a Date
                  </h2>
                  <DatePicker
                    date={date as Date}
                    setDate={setDate}
                    isSelected={selectedSlots?.length > 0}
                  />
                  <Card className=" border-gray-300">
                    <CardContent className=" bg-white">
                      {isError ? (
                        <div className=" text-gray-900 pb-5 pt-10 text-2xl font-semibold text-center px-4">
                          Please select a date which has slots available.
                        </div>
                      ) : (
                        <>
                          <h2 className=" text-xl font-bold text-gray-900 text-center pt-8">
                            Available slots for, &nbsp;
                            <span className="text-emerald-500">
                              {updatedDate}
                            </span>
                          </h2>
                          <p className=" text-gray-900 pt-2 pb-6 text-center font-semibold">
                            Please select slots according to your need{' '}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {availableSlots?.data?.map((slot: ISlot) => (
                              <div
                                key={slot?._id}
                                onClick={() => handleSlotClick(slot)}
                                className={`px-2 py-2 rounded-md ${
                                  isSlotSelected(slot)
                                    ? 'bg-emerald-600' // Selected slot color
                                    : 'bg-gray-900' // Default color
                                } text-white flex items-center justify-center font-semibold text-lg cursor-pointer`}
                              >
                                {slot?.startTime} - {slot?.endTime}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <div className=" flex justify-between gap-3 mb-8">
                    <p className=" text-xl font-bold text-gray-900">
                      {room?.data?.name}
                    </p>
                    <p className=" text-xl font-bold text-gray-900">
                      Room No: {room?.data?.roomNo}
                    </p>
                    <p className=" text-xl font-bold text-gray-900">
                      Floor No: {room?.data?.floorNo}
                    </p>
                  </div>

                  <Card className="w-full bg-white border-gray-300">
                    <CardContent className="">
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 mt-8">
                          <Input
                            id="name"
                            placeholder={user?.data?.name}
                            className="py-2 placeholder:text-base bg-white border-gray-300 font-semibold placeholder:text-gray-950"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Input
                            id="email"
                            placeholder={user?.data?.email}
                            className="py-2 placeholder:text-base font-semibold placeholder:text-gray-950 bg-white border-gray-300"
                          />
                        </div>
                        {user?.data?.phone && (
                          <div className="flex flex-col space-y-1.5">
                            <Input
                              id="phone"
                              placeholder={user?.data?.phone}
                              className="py-2 placeholder:text-base bg-white border-gray-300 font-semibold placeholder:text-gray-950"
                            />
                          </div>
                        )}

                        {selectedSlots?.length > 0 ? (
                          <Card className="bg-white text-gray-900 border-gray-300">
                            <CardContent className=" pb-0">
                              <div className=" py-2">
                                <p className="text-base font-semibold text-gray-950">
                                  Slots Selected: {selectedSlots.length}
                                </p>
                                <p className="text-base font-semibold text-gray-950 mt-1">
                                  Total Price:{' '}
                                  <span className="text-emerald-500 text-xl">
                                    {selectedSlots.length *
                                      // @ts-ignore
                                      selectedSlots[0].room?.pricePerSlot}
                                  </span>
                                  <span className="text-base text-gray-700 pl-2">
                                    (Price Per Slot: {/* @ts-ignore */}
                                    {selectedSlots[0].room?.pricePerSlot})
                                  </span>
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ) : null}

                        {selectedSlots?.length === 0 ? (
                          <Card className="bg-white border-gray-300">
                            <CardContent className="p-0">
                              <div className=" py-3 px-4">
                                <p className="text-base font-semibold text-emerald-600">
                                  You haven't selected any slots yet. Please
                                  select a slot to proceed to checkout.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ) : null}
                      </div>
                      <button
                        className="group py-2 px-6 bg-emerald-600 border border-transparent rounded-md w-full text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-700 mt-6 disabled:opacity-50"
                        disabled={selectedSlots.length === 0}
                        onClick={() => setIsProccedToCheckout(true)}
                      >
                        Proceed To Checkout
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </MaxWidthWrapper>
          )}
        </>
      )}
      <Footer />
    </>
  );
}

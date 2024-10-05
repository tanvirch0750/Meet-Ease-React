'use client';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClockIcon, MapPinIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '@/components/date-picker/date-picker';
import { formatDateToYYYYMMDD } from '@/lib/utils';
import { useGetAvailableSlotsQuery } from '@/redux/features/slots/slotsApi';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import { useGetProfileDataQuery } from '@/redux/features/user/userApi';
import { ISlot } from '@/types/slotType';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import Loader from '@/components/ui/loader';
import CheckoutPage from '../checkout/CheckoutPage';

export default function BookingPage() {
  const [date, setDate] = useState<Date>();
  const [isProccedToCheckout, setIsProccedToCheckout] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState<ISlot[]>([]);
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

  const handleSlotClick = (slot: ISlot) => {
    setSelectedSlots((prev) =>
      prev.some((s) => s._id === slot._id)
        ? prev.filter((s) => s._id !== slot._id)
        : [...prev, slot]
    );
  };

  const isSlotSelected = (slot: ISlot) =>
    selectedSlots.some((s) => s._id === slot._id);

  if (isLoading) return <Loader />;

  if (isProccedToCheckout) {
    return (
      <CheckoutPage
        selectedSlots={selectedSlots}
        user={user?.data}
        setIsProccedToCheckout={setIsProccedToCheckout}
        date={updatedDate}
      />
    );
  }

  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
        >
          <Card className="bg-white shadow-lg border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Select Date and Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Label
                  htmlFor="date-picker"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Choose a Date
                </Label>
                <DatePicker
                  // @ts-ignore
                  date={date}
                  setDate={setDate}
                  isSelected={selectedSlots.length > 0}
                />
              </div>
              {isError ? (
                <p className="text-center text-lg font-medium text-red-600">
                  Please select a date with available slots.
                </p>
              ) : (
                <>
                  <h3 className="mb-4 text-lg font-semibold text-gray-700">
                    Available slots for{' '}
                    <span className="text-emerald-600">
                      {updatedDate || 'selected date'}
                    </span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {availableSlots?.data?.map((slot: ISlot) => (
                      <Button
                        key={slot._id}
                        variant={isSlotSelected(slot) ? 'default' : 'outline'}
                        className={`h-auto py-3 ${
                          isSlotSelected(slot)
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : ''
                        }`}
                        onClick={() => handleSlotClick(slot)}
                      >
                        <ClockIcon className="mr-2 h-4 w-4" />
                        {slot.startTime} - {slot.endTime}
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white">
                <h3 className="mb-2 text-xl font-bold">{room?.data?.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPinIcon className="mr-2 h-5 w-5" />
                    <span>
                      Room {room?.data?.roomNo}, Floor {room?.data?.floorNo}
                    </span>
                  </div>
                  <div className="text-lg font-semibold">
                    ${room?.data?.pricePerSlot} / slot
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    value={user?.data?.name}
                    disabled
                    className="bg-gray-50 text-gray-700 disabled:opacity-95 border-gray-300"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    value={user?.data?.email}
                    disabled
                    className="bg-gray-50 text-gray-700 disabled:opacity-95 border-gray-300"
                  />
                </div>
                {user?.data?.phone && (
                  <div>
                    <Label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={user?.data?.phone}
                      disabled
                      className="bg-gray-50 text-gray-700 disabled:opacity-95 border-gray-300"
                    />
                  </div>
                )}
              </div>
              <Card className="mt-6 bg-gray-50 border-gray-300">
                <CardContent className="p-4">
                  {selectedSlots.length > 0 ? (
                    <>
                      <p className="font-semibold text-gray-800">
                        Slots Selected:{' '}
                        <span className="text-emerald-600">
                          {selectedSlots.length}
                        </span>
                      </p>
                      <p className="mt-2 text-lg font-bold text-gray-800">
                        Total Price:{' '}
                        <span className="text-emerald-600">
                          $
                          {selectedSlots.length *
                            // @ts-ignore
                            (selectedSlots[0]?.room?.pricePerSlot || 0)}
                        </span>
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-600">
                      Select slots to see booking details.
                    </p>
                  )}
                </CardContent>
              </Card>
              <Button
                className="mt-6 w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white"
                size="lg"
                disabled={selectedSlots.length === 0}
                onClick={() => setIsProccedToCheckout(true)}
              >
                Proceed To Checkout
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

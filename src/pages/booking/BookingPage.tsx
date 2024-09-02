import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <Header pageType="normal" />

      <MaxWidthWrapper className="py-24 ">
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className=" text-3xl text-gray-800 mb-6">Select a Date</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow w-full text-xl"
            />
          </div>
          <div>
            <div className=" flex justify-between gap-3 mb-8">
              <p className=" text-xl font-bold text-gray-900">
                Conference Room
              </p>
              <p className=" text-xl font-bold text-gray-900">Room No: 101</p>
              <p className=" text-xl font-bold text-gray-900">Floor No: 02</p>
            </div>

            <Card>
              <CardContent>
                <h2 className=" text-xl font-bold text-gray-900 text-center py-8">
                  Please Select slots for:{' '}
                  <span className="text-emerald-500">Sepetember - 3</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                  <div className=" px-2 py-3 rounded-md bg-gray-900 text-white flex items-center justify-center font-semibold text-xl cursor-pointer">
                    9:00 - 10:00
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>&nbsp;</div>
          <div>
            <Card className="w-full">
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5 mt-8">
                    <Input
                      id="name"
                      placeholder="Mohammad Tanvir Chowdhury"
                      className="py-6 placeholder:text-lg font-semibold placeholder:text-gray-950"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="name"
                      placeholder="tanvirch7575@gmail.com"
                      className="py-6 placeholder:text-lg font-semibold placeholder:text-gray-950"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="name"
                      placeholder="+8801302047933"
                      className="py-6 placeholder:text-lg font-semibold placeholder:text-gray-950"
                    />
                  </div>

                  <Card className="">
                    <CardContent>
                      <div className=" pt-6">
                        <p className="text-lg font-semibold text-gray-950">
                          Slot Selected: 0
                        </p>
                        <p className="text-lg font-semibold text-950-950 mt-2">
                          Total Price: 100{' '}
                          <span className=" text-base text-gray-700">
                            (Price Per Slot: 30)
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className=" pt-6">
                        <p className="text-lg font-semibold text-emerald-600">
                          You don't selected any slot yet. Please select slot
                          from bottom options for proceed to porceed to
                          checkout.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <button className="group py-4 px-6 bg-emerald-600 border border-transparent rounded-md w-full text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-700 mt-6">
                  Proceed To Checkout
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

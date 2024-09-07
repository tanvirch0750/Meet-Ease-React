import { Card, CardContent, CardHeader } from '@/components/ui/card';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

export default function CheckoutPage() {
  return (
    <>
      <MaxWidthWrapper className=" max-w-7xl py-8 text-gray-900">
        <Card className=" bg-white text-gray-900 border-gray-300">
          <CardHeader className="text-xl font-semibold">
            Pay with Amar Pay (Bkash, Nagad)
          </CardHeader>
          <CardContent>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
              <form className=" border border-gray-300 p-6 rounded-md">
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-lg font-medium"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Bonnie Green"
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
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
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
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
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
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
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-2 placeholder:text-gray-800"
                  />
                </div>
              </form>
              <div className=" p-6 border border-gray-300 rounded-md">
                <div className="bg-gray-100 p-4 rounded-lg mb-6 text-lg">
                  <div className="flex justify-between mb-2">
                    <span>Room Name:</span>
                    <span>Conference Room</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Room Number</span>
                    <span>201</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Floor Number</span>
                    <span>02</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Capacity</span>
                    <span>30</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Price Per Slot</span>
                    <span>3000</span>
                  </div>
                  <div className="flex justify-between font-semibold mb-2">
                    <span>Slot Selected</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between font-semibold ">
                    <span>Total Price</span>
                    <span>15000</span>
                  </div>
                </div>
                <button className="bg-emerald-500 text-white w-full py-3 rounded-md  hover:bg-emerald-600 text-xl font-bold">
                  Pay now
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </>
  );
}

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

export default function CheckoutPage() {
  return (
    <>
      <Header pageType="normal" />

      <MaxWidthWrapper className=" max-w-7xl py-24">
        <div className="  p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-950">
            Pay with Amar Pay (Bkash, Nagad)
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-lg font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Bonnie Green"
                  className="mt-1 block w-full bg-gray-100 border border-emerald-500 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-3 placeholder:text-gray-800"
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
                  className="mt-1 block w-full bg-gray-100 border border-emerald-500 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-3 placeholder:text-gray-800"
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
                  className="mt-1 block w-full bg-gray-100 border border-emerald-500 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-3 placeholder:text-gray-800"
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
                  className="mt-1 block w-full bg-gray-100 border border-emerald-500 rounded-md p-2.5 focus:ring-emerald-500 focus:border-emerald-500 py-3 placeholder:text-gray-800"
                />
              </div>
            </form>
            <div className=" pt-8">
              <div className="bg-gray-100 p-4 rounded-lg mb-6 text-xl">
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
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

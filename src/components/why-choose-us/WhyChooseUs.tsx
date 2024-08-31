import SectionHeader from '../section-header/SectionHeader';
import MaxWidthWrapper from '../ui/max-width-wrapper';

export default function WhyChooseUs() {
  return (
    <div className=" bg-gray-100">
      <SectionHeader
        className=" max-w-5xl md:pt-32 pt-16"
        headingSpanOne="Why Choose Us?"
        headingSpanTwo="Your Trusted Partner in Meeting Room Booking"
        description="We pride ourselves on offering a seamless booking experience that’s as easy as it is efficient. With secure transactions, you can book with confidence, knowing your information is protected. "
      />
      <MaxWidthWrapper className="pb-16">
        <div className="flex flex-col space-y-4 items-center justify-center py-0 md:py-12">
          <div className=" py-7 px-5">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-1 hidden md:block">
                <img src="https://cdn-icons-png.flaticon.com/128/7069/7069350.png" />
              </div>
              <div className="col-span-6 md:col-span-5">
                <h2 className="bg-gradient-to-r from-rose-500 to-sky-500 bg-clip-text text-transparent font-body text-4xl font-bold">
                  Secure Transactions
                </h2>
                <p className="text-gray-700 text-xl mt-4 ">
                  Your security is our priority. Our platform uses advanced
                  encryption and security protocols to ensure that every
                  transaction is safe and your personal information is
                  protected.
                </p>
              </div>
            </div>
          </div>
          <div className="py-7 px-5">
            <div className="grid grid-cols-6 gap-12">
              <div className="col-span-6 md:col-span-5 text-right">
                <h2 className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent font-body text-4xl font-bold">
                  Friendly Location
                </h2>
                <p className="text-gray-700 text-xl mt-4 ">
                  Choose from a wide range of meeting rooms in prime locations,
                  ensuring convenience and accessibility for you and your
                  attendees. Whether you're in the heart of the city or near
                  transport hubs, we have the perfect spot for your needs.
                </p>
              </div>
              <div className="col-span-1 hidden md:block">
                <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" />
              </div>
            </div>
          </div>
          <div className="py-7 px-5">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-1 hidden md:block">
                <img src="https://cdn-icons-png.flaticon.com/128/2651/2651001.png" />
              </div>
              <div className="col-span-6 md:col-span-5">
                <h2 className="bg-gradient-to-r from-orange-500 to-amber-200 bg-clip-text text-transparent font-body text-4xl font-bold">
                  Seamless Booking Experience
                </h2>
                <p className="text-gray-700 text-xl mt-4 ">
                  Book your meeting room in just a few clicks with our
                  user-friendly interface. We’ve streamlined the process to make
                  it as fast and effortless as possible, so you can focus on
                  your meeting, not the booking
                </p>
              </div>
            </div>
          </div>
          <div className="py-7 px-5">
            <div className="grid grid-cols-6 gap-12">
              <div className="col-span-6 md:col-span-5 text-right">
                <h2 className="bg-gradient-to-r from-emerald-600 to-green-400 bg-clip-text text-transparent font-body text-4xl font-bold">
                  Reliable Customer Support
                </h2>
                <p className="text-gray-700 text-xl mt-4 ">
                  We’re here to help, 24/7. Whether you have a question or need
                  assistance with your booking, our dedicated support team is
                  ready to provide prompt and reliable service whenever you need
                  it.
                </p>
              </div>
              <div className="col-span-1 hidden md:block">
                <img src="https://cdn-icons-png.flaticon.com/512/854/854470.png" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

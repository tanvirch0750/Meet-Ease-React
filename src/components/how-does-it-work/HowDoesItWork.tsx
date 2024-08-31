import SectionHeader from '../section-header/SectionHeader';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import HowDoesItWorkSvg from '../../assets/curved-dotted-line.svg';

export default function HowDoesItWork() {
  return (
    <MaxWidthWrapper className="pb-20 md:pb-44">
      <SectionHeader
        className=" max-w-5xl pt-0 md:pt-20"
        headingSpanOne="How It Works"
        headingSpanTwo="Simple Steps to Book Your Meeting Room"
        description="Booking your ideal meeting room has never been easier. With just three simple steps, you can secure the perfect space for your needs. Select your room, choose your date and time, and confirm your booking—it's that straightforward!"
      />
      <section id="works" className="relative pt-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-full"
                // style="color:transparent"
                src={HowDoesItWorkSvg}
              />
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-100 border-2 border-emerald-500 rounded-full shadow">
                  <span className="text-4xl font-semibold text-gray-700">
                    1
                  </span>
                </div>
                <h3 className="mt-6 text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-body font-bold leading-tight md:mt-10">
                  Select a Room
                </h3>
                <p className="mt-4 text-base text-gray-800 md:text-xl bg-gray-50 p-3 rounded-lg">
                  Browse through our diverse selection of meeting rooms and find
                  the perfect space that suits your needs.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-100 border-2 border-emerald-500 rounded-full shadow">
                  <span className="text-4xl font-semibold text-gray-700">
                    2
                  </span>
                </div>
                <h3 className="mt-6 text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-body font-bold leading-tight md:mt-10">
                  Choose Date & Time
                </h3>
                <p className="mt-4 text-base text-gray-800 md:text-xl bg-gray-50 p-3 rounded-lg">
                  Pick the date and time that works best for you, with real-time
                  availability to ensure your slot is secure.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-emerald-100 border-2 border-emerald-500 rounded-full shadow">
                  <span className="text-4xl font-semibold text-gray-700">
                    3
                  </span>
                </div>
                <h3 className="mt-6 text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-body font-bold leading-tight md:mt-10">
                  Confirm Booking
                </h3>
                <p className="mt-4 text-base text-gray-800 md:text-xl bg-gray-50 p-3 rounded-lg">
                  Review your selection and confirm your booking instantly.
                  You’re all set for a productive meeting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

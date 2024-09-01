import MaxWidthWrapper from '../ui/max-width-wrapper';
import Details from './Details';
import Form from './Form';

export default function ContactForm() {
  return (
    <MaxWidthWrapper className=" max-w-[1400px] py-24">
      <h1 className="text-[50px] md:text-[65px] lg:text-[80px] flex md:flex-col text  max-w-[900px] mb-2 bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text font-bold">
        Let's get in touch!
      </h1>
      <div className="flex flex-col md:flex-row gap-24 md:gap-24">
        <div className="min-w-[55%] ">
          <h2 className="text-[16px] lg:text-[25px] text-gray-800 font-medium">
            Feel free to contact us and we will get back to you as soon as we
            can.
          </h2>
          <Form />
        </div>
        <div className="flex justify-center min-w-[45%]">
          <Details />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

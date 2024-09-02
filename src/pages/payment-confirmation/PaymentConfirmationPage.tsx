import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import PrimaryButton from '@/components/ui/primary-button';

export default function PaymentConfirmationPage() {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper className=" py-24">
        <div className="bg-white">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-4xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-700 my-6 text-xl">
              Thank you for completing your secure online payment.
            </p>
            <p className=" mb-14"> Have a great day! </p>
            <PrimaryButton text=" Check your booked rooms" />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

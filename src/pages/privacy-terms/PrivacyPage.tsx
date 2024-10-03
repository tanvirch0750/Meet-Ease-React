import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

export default function PrivacyPage() {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper>
        <div className=" min-h-screen py-10 px-5 md:px-10">
          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-emerald-600">
              Privacy Policy for Meet Ease
            </h1>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Behind the Privacy: Our Commitment
            </h2>
            <p className="text-gray-700 mb-4">
              At Meet Ease, we understand that trust is fundamental to our
              relationship with you. Just as we strive to create the ultimate
              meeting room booking experience, we are equally dedicated to
              safeguarding your personal information. This Privacy Policy
              outlines how we collect, use, and protect your information,
              reflecting our commitment to transparency and security.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Our Information Practices
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              What We Collect
            </h3>
            <p className="text-gray-700 mb-4">
              In our pursuit of innovation, we gather essential information to
              enhance your experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Personal Information:</strong> When you create an
                account or book a meeting room, we collect details such as:
              </li>
              <ul className="list-decimal list-inside">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Information</li>
                <li>Payment Information (when applicable)</li>
              </ul>
              <li>
                <strong>Usage Data:</strong> To continuously improve our
                services, we monitor how you interact with our platform. This
                includes:
              </li>
              <ul className="list-decimal list-inside">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Pages Visited</li>
                <li>Time and Date of Access</li>
              </ul>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              How We Use Your Information
            </h3>
            <p className="text-gray-700 mb-4">
              Your information is the backbone of our ability to serve you
              effectively. Here’s how we utilize it:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Seamless Booking:</strong> We process your bookings to
                ensure a smooth and efficient experience.
              </li>
              <li>
                <strong>Customer Support:</strong> We are here to assist you.
                Your information helps us address your inquiries promptly.
              </li>
              <li>
                <strong>Service Improvements:</strong> Your usage data provides
                insights that allow us to innovate and enhance our platform
                continually.
              </li>
              <li>
                <strong>Communication:</strong> We may send you updates and
                confirmations regarding your bookings and our services.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              Sharing Your Information
            </h3>
            <p className="text-gray-700 mb-4">
              We value your privacy as much as you do. We do not sell or trade
              your personal information. However, we may share your information
              with trusted partners to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Service Providers:</strong> Third-party companies may
                assist us in operating our website and providing our services.
                They are bound to protect your information.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose your
                information if required by law or in response to valid requests
                by public authorities.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              Your Rights and Choices
            </h3>
            <p className="text-gray-700 mb-4">
              As part of our commitment to transparency, you have rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Access:</strong> You have the right to request access to
                your personal information.
              </li>
              <li>
                <strong>Correction:</strong> If you believe your information is
                inaccurate, you have the right to request corrections.
              </li>
              <li>
                <strong>Deletion:</strong> You may request that we delete your
                personal information under certain conditions.
              </li>
              <li>
                <strong>Objection:</strong> You can object to the processing of
                your personal information.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              Security Measures
            </h3>
            <p className="text-gray-700 mb-4">
              Your security is our priority. We implement robust measures to
              protect your information from unauthorized access, loss, or
              misuse. While we strive for top-notch security, please remember
              that no method of transmission over the internet is completely
              secure.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              Changes to This Policy
            </h3>
            <p className="text-gray-700 mb-4">
              As we evolve, so does our Privacy Policy. We may update this
              policy to reflect changes in our practices or for legal
              compliance. We encourage you to review this policy periodically
              for the latest updates.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns regarding our Privacy Policy
              or our data practices, please reach out to us:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Email:</strong> hello@meetease.com
              </li>
              <li>
                <strong>Phone:</strong> 415-201-6370
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

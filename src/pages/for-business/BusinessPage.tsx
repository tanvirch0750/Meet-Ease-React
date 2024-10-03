import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { Link } from 'react-router-dom';

export default function BusinessPage() {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper>
        <div className=" min-h-screen py-10 px-5 md:px-10">
          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-emerald-600">
              Elevate Your Business with Meet Ease
            </h1>
            <p className="text-gray-700 mb-4 ">
              Discover how Meet Ease can transform the way your organization
              approaches meeting room booking. With our innovative platform, you
              can enhance productivity, streamline processes, and create an
              environment conducive to collaboration.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Why Choose Meet Ease?
            </h2>
            <p className="text-gray-700 mb-4">
              At Meet Ease, we understand the unique challenges that businesses
              face when it comes to managing meetings and resources. Here’s why
              we are your ideal partner:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                📅 **Real-Time Availability**: Instantly view available meeting
                rooms and book on the spot.
              </li>
              <li>
                🔒 **Secure Transactions**: We prioritize your data privacy and
                security, ensuring safe transactions.
              </li>
              <li>
                📊 **Analytics and Insights**: Gain valuable insights into
                meeting room usage to optimize your space.
              </li>
              <li>
                🌍 **Seamless Integration**: Easily integrate with your existing
                tools and calendars.
              </li>
              <li>
                📞 **24/7 Support**: Our dedicated support team is available
                around the clock to assist you.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Features Designed for Success
            </h2>
            <p className="text-gray-700 mb-4">
              Our platform is equipped with features to enhance collaboration
              and efficiency:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Smart Room Management
                </h3>
                <p className="text-gray-700 mt-2">
                  Manage multiple rooms effortlessly, with options to customize
                  settings for each space.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Custom Branding
                </h3>
                <p className="text-gray-700 mt-2">
                  Tailor the platform to reflect your company's branding for a
                  seamless experience.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Mobile Accessibility
                </h3>
                <p className="text-gray-700 mt-2">
                  Book rooms and manage your schedule from anywhere, anytime
                  with our mobile-friendly interface.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">
                  Feedback & Ratings
                </h3>
                <p className="text-gray-700 mt-2">
                  Collect feedback from your team to continuously improve the
                  meeting experience.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Success Stories
            </h2>
            <p className="text-gray-700 mb-4">
              Join countless businesses that have transformed their meeting
              processes with Meet Ease. Here’s what some of our clients have to
              say:
            </p>
            <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-gray-700 mb-4">
              "Meet Ease has revolutionized our booking process. Our teams are
              more productive than ever!" -{' '}
              <strong>Sarah T., Operations Manager</strong>
            </blockquote>
            <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-gray-700 mb-4">
              "The analytics provided by Meet Ease have helped us optimize our
              meeting spaces significantly." -{' '}
              <strong>James R., Facility Manager</strong>
            </blockquote>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-4">
              Experience the future of meeting room booking.
            </p>
            <Link
              to="/"
              className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded hover:bg-emerald-700 transition duration-300"
            >
              Book a room
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

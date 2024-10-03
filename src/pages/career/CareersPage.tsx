import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';

export default function CareerPage() {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper>
        <div className=" min-h-screen py-10 px-5 md:px-10">
          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-12 text-emerald-600">
              Join Our Team at Meet Ease
            </h1>
            <p className="text-gray-700 mb-4 ">
              At Meet Ease, we believe that the right environment can unlock
              your team's full potential. We are always on the lookout for
              passionate, innovative, and dedicated individuals to join our team
              and help us reshape the future of meeting room booking.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Why Work with Us?
            </h2>
            <p className="text-gray-700 mb-4">
              We are committed to creating a workplace where everyone feels
              valued and empowered. Here's what you can expect when you join us:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>📈 Opportunities for professional growth and development</li>
              <li>🤝 A collaborative and inclusive culture</li>
              <li>🏆 Recognition for your contributions</li>
              <li>💻 Flexible working arrangements</li>
              <li>🥳 Fun team-building events and activities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Current Openings
            </h2>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Frontend Developer
              </h3>
              <p className="text-gray-700 mb-2">
                As a Frontend Developer, you will work closely with our design
                team to create user-friendly interfaces for our platform.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Requirements:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Proficient in React and Tailwind CSS</li>
                  <li>Strong understanding of responsive design</li>
                  <li>Experience with RESTful APIs</li>
                </ul>
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                2. Backend Developer
              </h3>
              <p className="text-gray-700 mb-2">
                We are looking for a Backend Developer to help us build scalable
                and efficient server-side logic for our application.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Requirements:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Experience with Node.js and Express</li>
                  <li>Familiarity with MongoDB</li>
                  <li>Understanding of RESTful architecture</li>
                </ul>
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                3. Product Manager
              </h3>
              <p className="text-gray-700 mb-2">
                Join us as a Product Manager to oversee product development and
                ensure we meet our customers' needs.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Requirements:</strong>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Proven experience in product management</li>
                  <li>Excellent communication skills</li>
                  <li>Ability to analyze market trends</li>
                </ul>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              How to Apply
            </h2>
            <p className="text-gray-700 mb-4">
              If you are excited about joining our team, please send your resume
              and a cover letter to{' '}
              <a
                href="mailto:careers@meetease.com"
                className="text-emerald-600 hover:underline"
              >
                careers@meetease.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">
              Our Hiring Process
            </h2>
            <p className="text-gray-700 mb-4">
              Our hiring process consists of the following steps:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>1. Application Review</li>
              <li>2. Initial Interview</li>
              <li>3. Technical Assessment (if applicable)</li>
              <li>4. Final Interview</li>
              <li>5. Job Offer</li>
            </ul>

            <p className="text-gray-700 mb-4">
              We are looking forward to welcoming you to our team!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

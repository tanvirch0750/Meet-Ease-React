import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { Link } from 'react-router-dom';
import AbcFarmImage from '@/assets/abc-corp.jpg';

const AbcCorpCaseStudyDetailPage = () => {
  return (
    <>
      <Header pageType="normal" />
      <MaxWidthWrapper className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text">
            ABC Corp Increases Productivity by 30% with Meet Ease
          </h1>

          <img
            src={AbcFarmImage}
            alt="Global Marketing Firm"
            className="w-full h-auto mb-6 rounded shadow-lg"
          />

          <p className="text-lg text-gray-700 mb-6">
            <strong>Company Overview:</strong> ABC Corp is a mid-sized
            technology firm specializing in software development and IT
            consulting services. With over 300 employees and multiple offices
            across the country, ABC Corp focuses on delivering high-quality
            solutions to its clients while fostering a collaborative work
            environment.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Background
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            In 2022, ABC Corp faced significant challenges in managing its
            meeting room bookings across its various offices. With a rapidly
            growing workforce, the existing manual booking system was becoming
            increasingly inefficient. Employees often faced scheduling
            conflicts, wasted time searching for available rooms, and
            frustration due to double bookings.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Challenges
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-600">
              Inefficient Booking Process: Employees spent an average of 15
              minutes each day trying to schedule meetings, leading to a
              collective time loss of approximately 75 hours per week.
            </li>
            <li className="text-gray-600">
              Lack of Real-Time Availability: Teams often found themselves
              unable to access updated room availability, resulting in missed
              opportunities for collaboration.
            </li>
            <li className="text-gray-600">
              Poor Resource Management: Meeting rooms were often left unused
              while other teams struggled to find space for important
              discussions.
            </li>
            <li className="text-gray-600">
              Fragmented Communication: Different departments used various tools
              for scheduling, creating confusion and miscommunication.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Goals</h2>
          <p className="text-lg text-gray-700 mb-6">
            ABC Corp aimed to streamline the booking process, provide real-time
            availability, improve resource utilization, and enhance
            collaboration and communication across teams.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Solution
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            After researching various options, ABC Corp decided to implement
            Meet Ease, a comprehensive meeting room booking solution that
            addressed their specific needs. The implementation involved several
            key components:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-600">
              Seamless Integration with Google Calendar and Microsoft Teams.
            </li>
            <li className="text-gray-600">
              User-Friendly Interface for quick access to room availability.
            </li>
            <li className="text-gray-600">
              Real-Time Notifications for meeting details.
            </li>
            <li className="text-gray-600">
              Analytics Dashboard for insights into room usage patterns.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">Results</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="text-gray-600">
              30% Increase in Productivity: The time savings equated to an
              estimated $100,000 in productivity gains annually.
            </li>
            <li className="text-gray-600">
              Enhanced Collaboration: Improved access to meeting spaces led to a
              25% increase in cross-departmental meetings.
            </li>
            <li className="text-gray-600">
              Efficient Resource Management: Room utilization improved from 60%
              to 85%.
            </li>
            <li className="text-gray-600">
              Positive Employee Feedback: 90% of employees felt the new system
              improved their work experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Testimonial
          </h2>
          <p className="italic text-gray-600 mb-6">
            "Meet Ease transformed how we manage our meetings. The ease of
            booking rooms and real-time availability has made a significant
            difference in our day-to-day operations." — John Smith, COO of ABC
            Corp
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Conclusion
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The partnership with Meet Ease has enabled ABC Corp to overcome its
            meeting room management challenges, resulting in improved
            productivity, collaboration, and employee satisfaction. As a leading
            tech firm, ABC Corp is now well-positioned to continue its growth
            trajectory while ensuring that its teams can collaborate effectively
            in the right environments.
          </p>

          <Link
            to="/#user-stories"
            className="inline-block mt-6 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-500"
          >
            Back to Case Studies
          </Link>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
};

export default AbcCorpCaseStudyDetailPage;

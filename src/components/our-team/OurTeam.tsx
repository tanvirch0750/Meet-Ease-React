import SectionHeader from '../section-header/SectionHeader';
import Emmaimg from '../../assets/Emma_Richardson.png';
import MichaelImg from '../../assets/michael.png';
import SophiaImg from '../../assets/Sophia.png';
import JamesImg from '../../assets/James_Carter.png';
import IsabellaImg from '../../assets/issabella.png';
import LiamImg from '../../assets/liam.png';

const teamMembers = [
  {
    name: 'Emma Richardson',
    designation: 'CEO & Co-founder',
    description:
      "Emma is the visionary behind the Meeting Room Booking System. With over 15 years of experience in managing tech startups, she focuses on leading the company's strategic direction and driving innovation. Emma’s goal is to deliver a seamless experience for users and help businesses optimize their workspace management.",
    img: Emmaimg,
  },
  {
    name: 'Michael Thompson',
    designation: 'Chief Technology Officer (CTO)',
    description:
      'Michael heads the technology team and is responsible for the platform’s architecture and scalability. With a background in software development and AI integration, he ensures that the system runs smoothly, securely, and efficiently. Michael is passionate about leveraging the latest technologies to continuously improve the platform.',
    img: MichaelImg,
  },
  {
    name: 'Sophia Harris',
    designation: 'Head of Customer Success',
    description:
      'Sophia leads the customer success team, ensuring clients have the best possible experience. With extensive experience in customer relations and service management, she is dedicated to solving customer needs and building long-term relationships. Her focus is on delivering satisfaction and helping businesses make the most of their booking system.',
    img: SophiaImg,
  },
  {
    name: 'James Carter',
    designation: 'Chief Operating Officer (COO)',
    description:
      'James oversees day-to-day operations and ensures smooth coordination across all departments. With a background in operational management for tech companies, he excels at optimizing internal processes to enhance efficiency. James is dedicated to scaling the company while maintaining top-tier service quality.',
    img: JamesImg,
  },
  {
    name: 'Isabella Martinez',
    designation: 'Head of Product Design',
    description:
      'Isabella is responsible for the user experience and interface design of the platform. With over a decade of experience in UX/UI design, she brings creativity and user-centric thinking to every project. Isabella’s passion for intuitive design ensures that the platform is both visually appealing and easy to navigate.',
    img: IsabellaImg,
  },
  {
    name: 'Liam Peterson',
    designation: 'Marketing Director',
    description:
      'Liam leads the marketing strategy and brand development efforts for the company. His expertise in digital marketing, combined with a strong focus on data-driven campaigns, has helped grow the company’s user base. Liam is focused on expanding the company’s reach and enhancing its brand presence in the market.',
    img: LiamImg,
  },
];

export default function OurTeam() {
  return (
    <div className=" bg-gray-100 py-12">
      <SectionHeader
        className=" max-w-5xl"
        headingSpanOne="Meet the Dream Team"
        headingSpanTwo="The Passionate People Behind Our Success"
        description="Our team is the driving force behind our innovative platform. Committed, skilled, and passionate, each member brings a unique expertise to ensure your experience is seamless and exceptional. Get to know the talented individuals who are dedicated to making your booking experience smooth and effective."
      />
      <div className="w-full px-10 pt-10">
        <div className="mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {teamMembers?.map((tm) => (
              <div
                key={tm?.designation}
                role="listitem"
                className="xl:w-1/3 sm:w-full md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={tm?.img}
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-gray-800">
                      {tm?.name}
                    </h1>
                    <p className="text-emerald-500 font-bold text-base text-center">
                      {tm?.designation}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {tm?.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Github" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

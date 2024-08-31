import {
  AlbumIcon,
  BadgeCheckIcon,
  HandshakeIcon,
  TrophyIcon,
} from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="pb-20 bg-gray-100 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <TrophyIcon />
                </div>
                <h6 className="text-2xl font-bold font-body">
                  Driven by Innovation
                </h6>
                <p className="mt-2 mb-4 text-gray-800 text-lg">
                  At the core of our success is a relentless drive to innovate.
                  Trusted by thousands of businesses worldwide, we are committed
                  to pushing the boundaries of what’s possible in meeting room
                  booking. Our cutting-edge technology and unwavering dedication
                  to customer satisfaction have made us a leader in the
                  industry, empowering you to achieve more
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <AlbumIcon />
                </div>
                <h6 className="text-2xl font-bold font-body">
                  Your Partner in Productivity
                </h6>
                <p className="mt-2 mb-4 text-gray-800 text-lg">
                  We believe that the right environment can unlock your team’s
                  full potential. As your partner in productivity, we’ve
                  designed our platform to provide not just convenience, but
                  also the tools you need to succeed. Our story is one of
                  passion, collaboration, and a dedication to helping you create
                  meaningful, impactful meetings—every time.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <BadgeCheckIcon />
                </div>
                <h6 className="text-2xl font-bold font-body">
                  Award-Winning Excellence
                </h6>
                <p className="mt-6 mb-4 text-gray-800 text-lg">
                  With a reputation for excellence and a commitment to
                  innovation, our award-winning platform has transformed the way
                  businesses book meeting spaces. Recognized for our
                  user-centric design and seamless functionality, we continue to
                  lead the industry by delivering top-tier solutions that meet
                  the evolving needs of modern professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <HandshakeIcon size={60} className=" text-emerald-500" />
            </div>
            <h3 className="text-4xl font-body mb-2 font-bold leading-normal">
              Working with us is a pleasure
            </h3>
            <p className="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-800">
              From the moment you start working with us, you’ll notice the
              difference. We’ve designed our platform to be intuitive and
              hassle-free, ensuring that booking a meeting room is quick and
              easy. Our team is always ready to assist, making every interaction
              smooth and enjoyable, so you can focus on your priorities.
            </p>
            <p className="text-xl font-light leading-relaxed mt-0 mb-4 text-gray-800">
              Beyond functionality, we’re committed to building lasting
              relationships. Whether you’re a new user or a returning client, we
              treat every interaction as an opportunity to provide exceptional
              service. With us, booking a meeting room isn’t just a task—it’s a
              pleasure.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-emerald-600">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-emerald-600 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-2xl font-body font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-lg mt-2 text-white">
                  Discover the gold standard in meeting room booking with our
                  top-notch services. From real-time availability to instant
                  confirmation, we offer seamless convenience and 24/7 support,
                  ensuring your experience is always exceptional.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

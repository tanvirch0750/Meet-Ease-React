'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ImgOne from '../../assets/collaboration.png';
import ImgTwo from '../../assets/video-conference.png';
import ImgThree from '../../assets/workspace.png';
import ImgFour from '../../assets/growth_14194581.png';
import SectionHeader from '../section-header/SectionHeader';
import MaxWidthWrapper from '../ui/max-width-wrapper';

const OurMission = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [prevTab, setPrevTab] = useState(null);

  const tabs = [
    {
      id: 0,
      title: 'Facilitating Seamless Collaboration',
      content:
        "In today’s fast-paced world, collaboration is key to success. Our mission is to eliminate the obstacles that stand in the way of effective teamwork. By offering an intuitive platform that allows you to easily find and book the perfect meeting room, we ensure that your focus remains on what truly matters—bringing people together to innovate and create. Whether you're hosting a brainstorming session, a client meeting, or a strategic planning workshop, we make the process seamless so you can achieve your goals with ease.",
      img: ImgOne,
    },
    {
      id: 1,
      title: 'Empowering Productive Meetings',
      content:
        'A productive meeting can make all the difference in driving your business forward. We are dedicated to providing you with the ideal environment where ideas can flourish and decisions can be made. Our mission is to empower every meeting by offering a diverse selection of rooms equipped with the amenities and technology you need to succeed. From the moment you book to the time you wrap up, we ensure that every detail is taken care of, allowing you to concentrate on delivering results.',
      img: ImgTwo,
    },
    {
      id: 2,
      title: 'Redefining Workspace Accessibility',
      content:
        'Access to professional, high-quality meeting spaces shouldn’t be a luxury—it should be a standard. Our mission is to redefine how businesses and individuals access workspaces by offering an easy-to-use platform that brings these spaces within reach. No matter where you are or what your budget is, we provide flexible and affordable options that cater to your specific needs. We believe that everyone should have the opportunity to work in an environment that inspires creativity and productivity, and we’re here to make that a reality.',
      img: ImgThree,
    },
    {
      id: 3,
      title: 'Supporting Sustainable Growth',
      content:
        'In an era where sustainability is more important than ever, our mission is to support businesses in their journey towards responsible growth. We provide meeting spaces that are not only designed for efficiency and productivity but also align with environmentally conscious practices. Whether through energy-efficient buildings, waste reduction initiatives, or promoting remote and hybrid work models, we are committed to making a positive impact. By choosing our services, you’re not just booking a meeting room—you’re contributing to a sustainable future that benefits everyone.',
      img: ImgFour,
    },
  ];

  const handleTabHover = (index: number) => {
    // @ts-ignore
    setPrevTab(activeTab);
    setActiveTab(index);
  };

  const getAnimationDirection = () => {
    if (prevTab === null) return 'to-right';
    return activeTab > prevTab ? 'to-right' : 'to-left';
  };

  return (
    <section className="relative pt-10 pb-40">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '80px' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <SectionHeader
        className=" max-w-5xl pb-14"
        headingSpanOne="Our Mission"
        headingSpanTwo="Driving Innovation, Empowering Collaboration"
        description="At the heart of our mission is a commitment to creating spaces where ideas flourish and connections are made. We believe in empowering individuals and teams by providing the tools and environments they need to succeed. Our goal is to make the process of finding and booking meeting rooms as seamless and stress-free as possible, so you can focus on what truly matters—achieving your goals."
      />

      <MaxWidthWrapper className="mx-auto px-4 max-w-7xl">
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
            {tabs.map((tab) => (
              <div key={tab.id} className="p-6 bg-gray-200">
                <h2 className="text-lg font-body text-gray-900 font-semibold mb-4">
                  {tab.title}
                </h2>
                <p className="text-md text-gray-800">{tab.content}</p>
              </div>
            ))}
          </div>

          <div className="lg:flex items-start hidden">
            <div className="flex flex-col gap-8 py-8 border-l-4 border-gray-300 ">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  className="relative w-72 px-4 h-[55px] hover:bg-transparent transition-colors duration-300 text-[18px] text-gray-800 font-medium"
                  onHoverStart={() => handleTabHover(index)}
                >
                  {activeTab === index && (
                    <motion.div
                      className="absolute h-full w-2 rounded-md left-[-6px] bottom-[1px] bg-emerald-500 font-body"
                      initial={false}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {tab.title}
                </motion.button>
              ))}
            </div>
            <div className="flex-grow relative bg-gray-100 overflow-x-hidden min-h-[400px] xl:min-h-[500px]">
              <AnimatePresence initial={false}>
                {activeTab !== null && (
                  <motion.div
                    key={activeTab}
                    className="absolute top-0 left-0 right-0"
                    initial={{
                      x:
                        getAnimationDirection() === 'to-right'
                          ? '100%'
                          : '-100%',
                    }}
                    animate={{ x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-12">
                      <div className="overflow-hidden flex flex-col gap-8">
                        <h2 className="text-3xl text-gray-800 font-semibold font-body">
                          {tabs[activeTab].title}
                        </h2>
                        <div className="flex flex-col xl:flex-row gap-8 items-start">
                          <img
                            src={tabs[activeTab].img}
                            className="hidden xl:block w-[230px]"
                          />
                          <p className="text-base text-gray-800 mt-3">
                            {tabs[activeTab].content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurMission;

import React from 'react';
import './Services.css';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import SectionHeader from '../section-header/SectionHeader';
import IconSupervisor from '../../assets/icon-supervisor.svg';
import IconTeamBuilder from '../../assets/icon-team-builder.svg';
import IconCalculator from '../../assets/icon-calculator.svg';
import IconCarma from '../../assets/icon-karma.svg';

const ServiceSection: React.FC = () => {
  return (
    <div className=" bg-gray-100">
      <MaxWidthWrapper className=" pt-10 pb-24">
        {/* Header Section */}
        <SectionHeader
          className=" max-w-5xl"
          headingSpanOne="Elevate Your Meeting Experience"
          headingSpanTwo="Seamless Booking, Exceptional Meetings"
          description="Our platform offers real-time availability, instant booking confirmation, and flexible scheduling, all backed by 24/7 support. Whether you're planning a quick huddle or a large conference, our system is designed to make your booking process smooth and hassle-free."
        />

        {/* Container Section */}
        <section className="service">
          <div className="box box-cyan">
            <h2 className=" font-semibold font-body text-gray-800 mb-4 text-2xl">
              Instant Booking Confirmation
            </h2>
            <p className=" mb-8">
              Get immediate confirmation of your booking, so you can plan with
              confidence and avoid the hassle of waiting.
            </p>
            <img src={IconSupervisor} alt="Supervisor" className="svg" />
          </div>
          <div className="box box-red">
            <h2 className=" font-body font-semibold text-gray-800 mb-4 text-2xl">
              Flexible Scheduling
            </h2>
            <p className=" mb-8">
              Choose the time that suits you best with our adaptable scheduling
              options, designed to fit your unique needs
            </p>
            <img src={IconTeamBuilder} alt="Team Builder" className="svg" />
          </div>
          <div className="box box-blue">
            <h2 className=" font-body font-semibold text-gray-800 mb-4 text-2xl">
              Real-Time Availability
            </h2>
            <p className=" mb-8">
              Real-Time Availability, Instant Booking Confirmation, Flexible
              Scheduling, 24/7 Support
            </p>
            <img src={IconCalculator} alt="Calculator" className="svg" />
          </div>
          <div className="box box-orange">
            <h2 className=" font-body font-semibold text-gray-800 mb-4 text-2xl">
              24/7 Support
            </h2>
            <p className=" mb-8">
              Our dedicated support team is available around the clock, ready to
              assist you whenever you need help or have questions.
            </p>
            <img src={IconCarma} alt="karma" className="svg" />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceSection;

'use client';

import { motion, useScroll } from 'framer-motion';
import { CalendarDays, CheckCircle, Search } from 'lucide-react';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import SectionHeader from '../section-header/SectionHeader';

const steps = [
  {
    number: 1,
    title: 'Select a Room',
    description:
      'Browse through our diverse selection of meeting rooms and find the perfect space that suits your needs.',
    icon: Search,
    color: 'from-pink-500 to-rose-500',
  },
  {
    number: 2,
    title: 'Choose Date & Time',
    description:
      'Pick the date and time that works best for you, with real-time availability to ensure your slot is secure.',
    icon: CalendarDays,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    number: 3,
    title: 'Confirm Booking',
    description:
      "Review your selection and confirm your booking instantly. You're all set for a productive meeting!",
    icon: CheckCircle,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function HowDoesItWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="pb-0 pt-0 bg-white overflow-hidden">
      <MaxWidthWrapper className="pb-20 md:pb-28">
        <SectionHeader
          className=" max-w-5xl pt-0 md:pt-12 pb-12"
          headingSpanOne="How It Works"
          headingSpanTwo="Simple Steps to Book Your Meeting Room"
          description="Booking your ideal meeting room has never been easier. With just three simple steps, you can secure the perfect space for your needs. Select your room, choose your date and time, and confirm your booking—it's that straightforward!"
        />

        <div className="relative">
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="relative bg-white border-gray-200 shadow-lg overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <CardContent className="p-6">
                    <motion.div
                      className={`absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-3xl shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {step.number}
                    </motion.div>
                    <div className="mt-12 text-center">
                      <step.icon
                        className={`mx-auto h-16 w-16 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${step.color} text-white p-3 rounded-full shadow-md`}
                      />
                      <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

{
  /* <MaxWidthWrapper className="pb-20 md:pb-28">
      <SectionHeader
        className=" max-w-5xl pt-0 md:pt-12"
        headingSpanOne="How It Works"
        headingSpanTwo="Simple Steps to Book Your Meeting Room"
        description="Booking your ideal meeting room has never been easier. With just three simple steps, you can secure the perfect space for your needs. Select your room, choose your date and time, and confirm your booking—it's that straightforward!"
      /> */
}

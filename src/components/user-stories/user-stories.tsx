import { ArrowRight, TrendingUp, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import MaxWidthWrapper from '../ui/max-width-wrapper';

export default function UserStoriesSection() {
  const stories = [
    {
      title: 'ABC Corp Increases Productivity by 30%',
      description:
        'After switching to Meet Ease, ABC Corp noticed a significant boost in productivity among teams due to streamlined booking processes...',
      link: '/case-studies/abc-corp',
      icon: TrendingUp,
    },
    {
      title: 'XYZ Inc Saves Time with Real-Time Booking',
      description:
        'XYZ Inc reduced the time spent on booking rooms by using our real-time availability feature...',
      link: '/case-studies/xyz-inc',
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 relative  bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-500">
      {/* Content */}
      <MaxWidthWrapper className="pb-10 md:pb-0 pt-0 max-w-6xl">
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-center text-white drop-shadow-lg mb-4">
            Navigating Success Together
          </h2>
          <p className="text-lg  font-medium">
            Discover how we helped businesses navigate challenges and achieve
            greatness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-16 h-16 mb-4 mx-auto bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <story.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">
                  {story.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{story.description}</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Link to={story.link}>
                  <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold group hover:opacity-90">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
    </section>
  );
}

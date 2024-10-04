import FeaturedIn from '@/components/featured-in/FeaturedIn';
import { FeaturedRooms } from '@/components/featured-rooms/FeaturedRooms';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Carousel from '@/components/hero-slider-two/HeroSliderTwo';
import HowDoesItWork from '@/components/how-does-it-work/HowDoesItWork';
import ServiceSection from '@/components/services/Services';
import TestimonialsSection from '@/components/testimonials/Testimonials';
import UserStoriesSection from '@/components/user-stories/user-stories';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation(); // React Router hook to access the current location

  useEffect(() => {
    // Check if the URL contains a hash and scroll to the respective section
    if (location.hash === '#user-stories') {
      const element = document.getElementById('user-stories');
      if (element) {
        // Scroll to the UserStoriesSection
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Header pageType="home" />
      <Carousel />
      <FeaturedIn />
      <ServiceSection />
      <FeaturedRooms />
      <WhyChooseUs />
      <UserStoriesSection />
      <HowDoesItWork />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

import FeaturedIn from '@/components/featured-in/FeaturedIn';
import { FeaturedRooms } from '@/components/featured-rooms/FeaturedRooms';
import Carousel from '@/components/hero-slider-two/HeroSliderTwo';
import HowDoesItWork from '@/components/how-does-it-work/HowDoesItWork';
import ServiceSection from '@/components/services/Services';
import TestimonialsSection from '@/components/testimonials/Testimonials';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <FeaturedIn />
      <ServiceSection />
      <FeaturedRooms />
      <WhyChooseUs />
      <HowDoesItWork />
      <TestimonialsSection />
    </>
  );
}

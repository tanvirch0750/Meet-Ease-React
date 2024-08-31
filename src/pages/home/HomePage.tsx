import FeaturedIn from '@/components/featured-in/FeaturedIn';
import { FeaturedRooms } from '@/components/featured-rooms/FeaturedRooms';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Carousel from '@/components/hero-slider-two/HeroSliderTwo';
import HowDoesItWork from '@/components/how-does-it-work/HowDoesItWork';
import ServiceSection from '@/components/services/Services';
import TestimonialsSection from '@/components/testimonials/Testimonials';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Header pageType="home" />
      <Carousel />
      <FeaturedIn />
      <ServiceSection />
      <FeaturedRooms />
      <WhyChooseUs />
      <HowDoesItWork />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

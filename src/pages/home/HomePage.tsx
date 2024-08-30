import { FeaturedRooms } from '@/components/featured-rooms/FeaturedRooms';
import Carousel from '@/components/hero-slider-two/HeroSliderTwo';
import ServiceSection from '@/components/services/Services';

export default function HomePage() {
  return (
    <>
      <Carousel />
      <ServiceSection />
      <FeaturedRooms />
    </>
  );
}

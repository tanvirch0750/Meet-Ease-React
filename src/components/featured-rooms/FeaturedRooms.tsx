import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import SectionHeader from '../section-header/SectionHeader';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import SeeMoreButton from '../ui/see-more-button';
import PrimaryButton from '../ui/primary-button';

export function FeaturedRooms() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <SectionHeader
        className=" pt-16 pb-0 max-w-5xl"
        headingSpanOne="Explore Our Top Meeting Spaces"
        headingSpanTwo="Handpicked Rooms for Every Occasion"
        description="Discover a selection of our most popular meeting rooms, each designed to cater to your specific needs. Whether you're hosting a large conference or an intimate huddle, you'll find the perfect space with the right amenities."
      />
      <MaxWidthWrapper className=" pb-12 pt-0">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <section className="pb-14 md:pb-24 pt-8 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
                  <div className="container px-4 mx-auto">
                    <div
                      className="absolute top-36 right-[20%] bottom-0 w-[80vw] bg-center bg-no-repeat bg-cover min-h-[350px] lg:h-full lg:w-[60vw] lg:right-[40%] -z-10"
                      style={{
                        backgroundImage:
                          'url(https://cdn.easyfrontend.com/pictures/featured/featured_13.png)',
                      }}
                    ></div>

                    <div className="grid grid-cols-12">
                      <div className="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 text-center lg:text-start">
                        <div className="bg-white/70 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-12">
                          <h2 className="text-2xl leading-snug md:text-[40px] mb-6">
                            Conference Room
                          </h2>
                          <div className="pb-6 flex items-center gap-8">
                            <p className=" text-xl font-semibold text-gray-800 flex items-center gap-3">
                              <span>Capacity:</span>
                              <span>30</span>
                            </p>
                            <p className=" text-xl font-semibold text-gray-800 flex items-center gap-3">
                              <span>Price Per Slot:</span>
                              <span>30</span>
                            </p>
                          </div>
                          <p className="text-lg leading-normal opacity-80">
                            It{'’'}s easier to reach your savings goals when you
                            have the right savings account. Take a look and find
                            the right one for you!
                          </p>
                          <div className="mt-12">
                            <PrimaryButton text="details" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-8 text-center text-xl text-muted-foreground">
          <span>
            Featured Room {current} of {count}
          </span>
          <div className=" mt-8">
            <SeeMoreButton text="See More" />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

// import SectionHeader from '../section-header/SectionHeader';
// import MaxWidthWrapper from '../ui/max-width-wrapper';

// export default FeatureProduct;

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
import { useGetRoomsQuery } from '@/redux/features/room/roomApi';
import { Link } from 'react-router-dom';
import { IRoom } from '@/types/roomType';

export function FeaturedRooms() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const { data: rooms } = useGetRoomsQuery({
    page: 1,
    limit: 100,
  });

  const filteredData = rooms?.data?.filter((room: IRoom) => room?.isFeatured);

  console.log('filtered data', filteredData);

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
    <div className="">
      <SectionHeader
        className=" pb-0 pt-10 max-w-5xl"
        headingSpanOne="Explore Our Top Meeting Spaces"
        headingSpanTwo="Handpicked Rooms for Every Occasion"
        description="Discover a selection of our most popular meeting rooms, each designed to cater to your specific needs. Whether you're hosting a large conference or an intimate huddle, you'll find the perfect space with the right amenities."
      />
      <MaxWidthWrapper className="pb-10 md:pb-0 pt-0 max-w-6xl">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {filteredData?.map((room: IRoom) => (
              <CarouselItem key={room?._id}>
                <section className="pb-14 md:pb-24 pt-0 md:pt-8 bg-white text-zinc-900 relative overflow-hidden z-10">
                  <div className="container px-4 mx-auto">
                    <div
                      className="hidden md:block absolute top-36 right-[20%] bottom-0 w-[80vw] bg-center bg-no-repeat bg-cover min-h-[350px] lg:h-full lg:w-[60vw] lg:right-[40%] -z-10"
                      style={{
                        backgroundImage: `url(${room?.images[0]})`,
                      }}
                    ></div>

                    <div className="grid grid-cols-12 bg-emerald-100 md:bg-transparent">
                      <div className="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 text-center lg:text-start">
                        <div className="bg-white/70 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-12">
                          <div className=" flex items-center justify-between gap-3 mb-6">
                            <h2 className="text-xl font-body text-gray-800 leading-snug md:text-[28px] ">
                              {room?.name}
                            </h2>
                            <span className=" bg-emerald-100 text-emerald-950 px-2 py-1 font-semibold rounded-lg text-sm">
                              {room?.category?.name}
                            </span>
                          </div>
                          <div className="pb-6 flex flex-col md:flex-row items-center gap-8">
                            <p className=" text-lg font-semibold text-gray-800 flex items-center gap-3">
                              <span>Capacity:</span>
                              <span>{room?.capacity}</span>
                            </p>
                            <p className=" text-lg font-semibold text-gray-800 flex items-center gap-3">
                              <span>Price Per Slot:</span>
                              <span>{room?.pricePerSlot}</span>
                            </p>
                          </div>
                          <p className="text-[16px] leading-normal opacity-80">
                            {room?.description}
                          </p>
                          <div className="mt-12">
                            <Link to={`/rooms/${room?._id}`}>
                              <PrimaryButton text="details" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex ml-[-20px]" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="py-8 text-center text-lg text-gray-800">
          <span>
            Featured Room {current} of {filteredData?.length}
          </span>
          <div className=" mt-8">
            <Link to="/rooms">
              {' '}
              <SeeMoreButton text="See More" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

// import SectionHeader from '../section-header/SectionHeader';
// import MaxWidthWrapper from '../ui/max-width-wrapper';

// export default FeatureProduct;

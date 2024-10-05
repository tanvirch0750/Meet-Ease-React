import { useRef } from 'react';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import ImageGallery from '../../components/image-gallery/ImageGallery';
import Header from '@/components/header/header';
import { CheckIcon } from 'lucide-react';
import Footer from '@/components/footer/footer';
import CustomerComments from '../../components/customer-comments/CustomerComments';
import { Link, useParams } from 'react-router-dom';
import { useGetRoomQuery } from '@/redux/features/room/roomApi';
import Loader from '@/components/ui/loader';
import ErrorPage from '../error/ErrorPage';
import { useGetReviewStatQuery } from '@/redux/features/reviews/reviewsApi';
import StarRating from '@/components/review/StarRating';

const RoomDetailPage = () => {
  const { id } = useParams();
  const commentsRef = useRef<HTMLDivElement>(null);

  const { data: room, isLoading, isError } = useGetRoomQuery(id!);
  const { data: reviewStat } = useGetReviewStatQuery(id!);

  // Function to handle scroll to customer comments
  const scrollToComments = () => {
    commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header pageType="normal" />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="py-10 lg:pb-24 lg:pt-12 relative ">
          <MaxWidthWrapper className=" max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-12">
              <ImageGallery images={room?.data?.images} />
              <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
                <p className="font-medium text-lg text-emerald-500 mb-4">
                  {room?.data?.category?.name}
                </p>
                <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
                  {room?.data?.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-manrope font-semibold text-3xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    <span className=" inline-block pl-2 text-base font-normal ">
                      BDT
                    </span>{' '}
                    {room?.data?.pricePerSlot}
                    <span className=" inline-block pl-2 text-base font-normal ">
                      (Price Per Slot)
                    </span>
                  </h6>
                  {reviewStat?.data?.totalReviews > 0 ? (
                    <>
                      {' '}
                      <StarRating
                        averageRating={reviewStat?.data?.averageRating}
                        totalReviews={reviewStat?.data?.totalReviews}
                      />
                      {/* Clickable reviews count */}
                      <span
                        className="text-gray-500 text-sm cursor-pointer hover:underline  pl-4"
                        onClick={scrollToComments} // Scroll to comments on click
                      >
                        See all the reviews ({reviewStat?.data?.totalReviews})
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-500 text-sm cursor-pointer hover:underline  pl-4">
                      This room hasn't received any reviews yet
                    </span>
                  )}
                </div>
                <p className="text-gray-800 text-base font-normal mb-4">
                  {room?.data?.description
                    ? room?.data?.description
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dicta sapiente sed distinctio reiciendis saepe earum aliquid exercitationem officiis voluptas molestiae architecto laudantium perferendis quos beatae corrupti est placeat sint, quasi, temporibus rem? Commodi et deserunt quae magni provident! Fugit quam repellat impedit sapiente cumque non amet saepe, nemo eos quisquam unde nihil, dignissimos, reprehenderit maiores. '}
                </p>
                <div className="w-full flex items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="font-bold text-base leading-8 text-gray-900">
                      Room No:{' '}
                      <span className="text-emerald-500 font-semibold text-xl">
                        {room?.data?.roomNo}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base leading-8 text-gray-900">
                      Floor No:{' '}
                      <span className="text-emerald-500 font-semibold text-xl">
                        {room?.data?.floorNo}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-base leading-8 text-gray-900">
                      Capacity:{' '}
                      <span className="text-emerald-500 font-semibold text-xl">
                        {room?.data?.capacity}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-full mb-8">
                  <div>
                    <p className="font-bold text-lg leading-8 text-gray-900">
                      Amenities
                    </p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {room?.data?.amenities?.map((amn: string) => (
                        <li
                          key={amn}
                          className=" text-base font-medium text-gray-900 flex items-center gap-2"
                        >
                          <span>
                            <CheckIcon className=" text-emerald-500" />
                          </span>
                          {amn}
                          <span></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center justify-center w-full">
                      <Link
                        to="/rooms"
                        className="text-center group py-4 px-6 border border-emerald-600 rounded-md w-full text-base font-medium text-gray-900 transition-all duration-300 hover:bg-emerald-100"
                      >
                        Go Back
                      </Link>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <Link
                        to={`/booking/${room?.data?._id}`}
                        className="group text-center py-4 px-6 bg-emerald-600 border border-transparent rounded-md w-full text-lg font-semibold text-white transition-all duration-300 hover:bg-emerald-700"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* Attach the ref to the CustomerComments section */}
      <div ref={commentsRef}>
        <CustomerComments roomid={id as string} />
      </div>

      <Footer />
    </>
  );
};

export default RoomDetailPage;

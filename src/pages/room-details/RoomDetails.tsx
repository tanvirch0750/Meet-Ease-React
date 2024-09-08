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

const RoomDetailPage = () => {
  const { id } = useParams();

  const { data: room, isLoading, isError } = useGetRoomQuery(id!);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header pageType="normal" />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="py-10 lg:py-24 relative ">
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
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_12029_1640)">
                            <path
                              d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                              fill="#FBBF24"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_12029_1640">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ))}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_8480_66029)">
                          <path
                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                            fill="#F3F4F6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_8480_66029">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">
                      1624 review
                    </span>
                  </div>
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

      <CustomerComments />
      <Footer />
    </>
  );
};

export default RoomDetailPage;

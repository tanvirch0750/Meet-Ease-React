import { useState } from 'react';
import UserImg from '../../assets/customer-4.jpg';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import { Star } from 'lucide-react';
import { useGetReviewsByRoomQuery } from '@/redux/features/reviews/reviewsApi';
import { IReview } from '@/types/reviewType';
import { formatDate } from '@/lib/utils';

export default function CustomerComments({ roomid }: { roomid: string }) {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsByRoomQuery(roomid!);

  const [visibleComments, setVisibleComments] = useState(6); // Initial state showing 6 comments
  const [showAll, setShowAll] = useState(false); // Toggle state for Show More / Show Less

  const showMoreComments = () => {
    if (showAll) {
      setVisibleComments(6);
      setShowAll(false);
    } else {
      setVisibleComments(reviews?.data?.length || 0);
      setShowAll(true);
    }
  };

  if (isLoading) {
    return <p>Loading reviews...</p>; // Handle loading state
  }

  if (isError) {
    return <p>Error loading reviews. Please try again later.</p>; // Handle error state
  }

  return (
    <section className="bg-white border-t border-gray-300 py-14">
      <MaxWidthWrapper className="max-w-7xl">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900 text-center">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Dynamically render comments from API */}
          {reviews?.data?.slice(0, visibleComments).map((review: IReview) => (
            <div
              key={review._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review?.user?.image || UserImg}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full mr-4 border border-gray-300"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {review.user.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formatDate(review?.createdAt as string)}
                  </p>
                </div>
              </div>
              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {/* @ts-ignore */}
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-md">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {reviews?.data && reviews?.data?.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={showMoreComments}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300 ease-in-out"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
}

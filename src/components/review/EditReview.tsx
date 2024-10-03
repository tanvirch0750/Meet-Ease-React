import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { IReview } from '@/types/reviewType';
import Swal from 'sweetalert2';
import { DialogClose } from '@radix-ui/react-dialog';
import {
  useEditReviwMutation,
  useGetReviewQuery,
} from '@/redux/features/reviews/reviewsApi';

export function EditReview({ reviewId }: { reviewId: string }) {
  const { data: review, isLoading: isReviewLoading } =
    useGetReviewQuery(reviewId);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [editReview, { isLoading, isError, isSuccess }] =
    useEditReviwMutation();

  console.log('review data', review);

  useEffect(() => {
    if (review) {
      setRating(review.data?.rating);
      setComment(review.data?.review);
    }
  }, [review]);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleEditReview = async () => {
    // Validation: Check if both rating and comment are provided
    if (!comment.trim()) {
      alert('Please provide a review');
      return;
    }

    if (rating === 0) {
      alert('Rating needed');
      return;
    }

    const reviewData: IReview = {
      review: comment,
      room: review.room,
      user: review.user,
      rating: rating,
    };

    const res = await editReview({ id: reviewId, data: reviewData });

    console.log(res);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Review updated successfully',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There was an error, please try again',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [isSuccess, isError]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-white hover:text-white bg-orange-500 hover:bg-orange-600"
        >
          Edit Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Edit Review</DialogTitle>
          <DialogDescription className="text-gray-600">
            Update your review about the room you booked
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Review Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="review" className="text-right text-gray-800">
              Your Review
            </Label>
            <input
              id="review"
              placeholder="Your Review"
              className="col-span-3 bg-white border px-2 py-1.5 rounded-md border-gray-400 text-gray-600"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              disabled={isReviewLoading} // Disable input while loading
            />
          </div>

          {/* Rating Input */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right text-gray-800">
              Your Rating
            </Label>
            <div className="col-span-3 flex space-x-2">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <Star
                  key={starIndex}
                  className={`h-6 w-6 cursor-pointer text-yellow-500 ${
                    starIndex <= rating
                      ? 'fill-current text-brand'
                      : 'text-gray-700'
                  }`}
                  onClick={() => handleStarClick(starIndex)}
                />
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose>
            <Button variant={'destructive'}>Close</Button>
          </DialogClose>
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white hover:text-white"
            onClick={handleEditReview}
            disabled={isLoading || isReviewLoading}
          >
            {isLoading ? 'Processing' : 'Update Review'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

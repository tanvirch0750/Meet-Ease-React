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
import { useAddReviewMutation } from '@/redux/features/reviews/reviewsApi';
import Swal from 'sweetalert2';
import { DialogClose } from '@radix-ui/react-dialog';
import { useIsReviewAddedMutation } from '@/redux/features/bookings/bookingsApi';

export function AddaReview({
  room,
  user,
  bookingId,
}: {
  user: string;
  room: string;
  bookingId: string;
}) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [addReview, { isLoading, isError, isSuccess }] = useAddReviewMutation();
  const [isReviewAdded] = useIsReviewAddedMutation();

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleAddReview = async () => {
    // Validation: Check if both rating and comment are provided
    if (!comment.trim()) {
      alert('Please give a review');
      return;
    }

    if (rating === 0) {
      alert('Rating needed');
      return;
    }

    const reviewData = {
      review: comment,
      room: room,
      user: user,
      rating: rating,
    };

    const res = await addReview(reviewData);

    if (res?.data?.success) {
      const data = {
        reviewId: res?.data?.data?._id,
      };
      await isReviewAdded({ id: bookingId, data });
    }

    console.log(res);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for your review',
        showConfirmButton: false,

        timer: 3000,
      });
    }
    if (isError) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'There was an error, please try agin',

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
          className="text-white hover:text-white bg-emerald-600 hover:bg-emerald-500"
        >
          Give Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-white">
        <DialogHeader>
          <DialogTitle className=" text-gray-900">Add Review</DialogTitle>
          <DialogDescription className=" text-gray-600">
            Give a review about the room you booked
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
            className=" bg-emerald-500 hover:bg-emerald-600 text-white hover:text-white"
            onClick={handleAddReview}
            disabled={isLoading}
          >
            {isLoading ? 'Processing' : 'Add Review'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

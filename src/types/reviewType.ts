export type IReview = {
  review: string;
  user: {
    name: string;
    image: string;
  };
  room: string;
  rating?: number;
  isDeleted?: boolean;
  createdAt?: string;
  _id?: string;
};

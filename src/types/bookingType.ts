export type IBooking = {
  date: string;
  room?: {
    name: string;
    roomNo: string | number;
    _id: string;
  };
  user?: {
    email: string;
    name: string;
    _id: string;
  };
  slots: {
    startTime: string;
    endTime: string;
  }[];
  totalAmount?: number;
  isConfirmed?: 'confirmed' | 'unconfirmed' | 'cancelled';
  isDeleted: boolean;
  trxId: string;
  isReviewAdded?: boolean;
  reviewId?: string;
  _id?: string;
};

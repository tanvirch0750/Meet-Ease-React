export type IRoom = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
  images: string[];
  category: {
    name: string;
    _id?: string;
  };
  isFeatured: boolean;
  description: string;
  _id: string;
};

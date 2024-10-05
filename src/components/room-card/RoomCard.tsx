import { IRoom } from '@/types/roomType';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { CalendarIcon, StarIcon, UsersIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function RoomCard({ room }: { room: IRoom }) {
  return (
    <Card className="w-full max-w-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-gray-100 group">
      <CardHeader className="p-0">
        <NavLink
          className="relative  flex h-60 overflow-hidden  rounded-t-xl"
          to={`/rooms/${room?._id}`}
        >
          <img
            className="object-cover w-full transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-90 "
            src={room?.images[0]}
            alt="product image"
          />
          <Badge className="absolute top-4 left-4 bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white">
            {room?.category?.name}
          </Badge>
        </NavLink>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {room.name}
          </h3>
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400 fill-current font-body" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {room?.averageRating ? room?.averageRating : 4.8}
            </span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <UsersIcon className="w-4 h-4 mr-1 text-emerald-700" />
          <span className="text-sm font-medium">
            Capacity: {room.capacity} guests
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1 text-emerald-700" />
            <span className="text-sm font-medium text-gray-800">
              BDT -{' '}
              <span className=" text-xl font-semibold">
                {room.pricePerSlot}
              </span>
            </span>
          </div>
          <span className="text-xs text-gray-500">(Per Slot)</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <NavLink to={`/rooms/${room?._id}`} className="w-full">
          <Button
            className="w-full bg-emerald-700 text-white hover:bg-emerald-600 hover:text-white"
            variant="default"
          >
            See Details
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
}

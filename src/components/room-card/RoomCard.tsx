import { NavLink } from 'react-router-dom';

export default function RoomCard({ room }: { room: any }) {
  return (
    <div className="relative flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md group">
      <a className="relative  flex h-60 overflow-hidden  rounded-t-xl" href="#">
        <img
          className="object-cover w-full transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-90 "
          src={room?.images[0]}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-emerald-950 px-3 py-1 text-center text-sm font-bold text-white hidden group-hover:block transition-all duration-300">
          <span>Capacity:</span> <span>{room?.capacity}</span>
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-lg tracking-tight text-gray-800 font-semibold">
            {room?.name}
          </h5>
        </a>
        <div className="mt-4 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-gray-800">
              ${room?.pricePerSlot}
            </span>
            <span className="text-[14px] text-gray-800 pl-2 font-medium">
              (Price Per Slot)
            </span>
          </p>
        </div>
        <NavLink
          to={`/rooms/${room?._id}`}
          className="flex items-center justify-center rounded-md bg-emerald-500 px-5 py-1.5 text-center text-lg font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          See Details
        </NavLink>
      </div>
    </div>
  );
}

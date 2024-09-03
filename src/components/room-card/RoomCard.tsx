import { NavLink } from 'react-router-dom';

export default function RoomCard() {
  return (
    <div className="relative flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-cover w-full"
          src="https://img.freepik.com/free-vector/conference-room-interior-illustration_1284-6237.jpg?uid=R15161155&ga=GA1.1.911219905.1717681244&semt=ais_hybrid"
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-emerald-950 px-3 py-1 text-center text-sm font-bold text-white">
          <span>Capacity:</span> <span>30</span>
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-lg tracking-tight text-gray-900">
            Nike Air MX Super 2500 - Red
          </h5>
        </a>
        <div className="mt-4 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-gray-900">$449</span>
            <span className="text-base text-gray-900 pl-2 font-semibold">
              (Price Per Slot)
            </span>
          </p>
        </div>
        <NavLink
          to="/rooms/dfdf"
          className="flex items-center justify-center rounded-md bg-emerald-500 px-5 py-1.5 text-center text-lg font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          See Details
        </NavLink>
      </div>
    </div>
  );
}

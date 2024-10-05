import Header from '@/components/header/header';
import RoomCard from '@/components/room-card/RoomCard';
import RoomListFilter from '@/components/filters/room-filters';
import SearchCategoryFilter from '../../components/filters/SearchCategoryFilter';
import { useGetRoomsQuery } from '@/redux/features/room/roomApi';
import Loader from '@/components/ui/loader';
import { useSelector } from 'react-redux';
import { selectFilteredAndSortedRooms } from '@/redux/features/room/roomsSelector';
import Footer from '@/components/footer/footer';

export default function RoomListPage() {
  const { data: rooms, isLoading } = useGetRoomsQuery({
    page: 1,
    limit: 100,
  });

  const filteredRooms = useSelector(selectFilteredAndSortedRooms(rooms?.data));

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Header pageType="normal" />
      <div className="flex flex-col min-h-screen pb-12 pt-6">
        <SearchCategoryFilter />
        <main className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
          <RoomListFilter />

          {filteredRooms?.length > 0 ? (
            <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms?.map((room: any) => (
                <RoomCard key={room?._id} room={room} />
              ))}
            </div>
          ) : (
            <div className=" w-full h-screen flex items-center justify-center">
              <div className="mt-[-100px]">
                <div className="px-2 flex flex-col items-center justify-center max-w-[500px] mx-auto">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    No Meeting Rooms Available
                  </h2>
                  <p className="text-gray-600 text-center">
                    It looks like there are no rooms available with your query
                    at the moment. Please check back later or contact support
                    for more information.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

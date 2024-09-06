import Header from '@/components/header/header';
import RoomCard from '@/components/room-card/RoomCard';
import RoomListFilter from '@/components/filters/room-filters';
import SearchCategoryFilter from '../../components/filters/SearchCategoryFilter';
import { useGetRoomsQuery } from '@/redux/features/room/roomApi';
import Loader from '@/components/ui/loader';
import { useSelector } from 'react-redux';
import { selectFilteredAndSortedRooms } from '@/redux/features/room/roomsSelector';

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
      <div className="flex flex-col min-h-screen">
        <SearchCategoryFilter />
        <main className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
          <RoomListFilter />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 p-4 lg:p-6 ">
            {filteredRooms?.map((room: any) => (
              <RoomCard key={room?._id} room={room} />
            ))}

            {/* <RoomCard />
            <RoomCard />
            <RoomCard /> */}
          </div>
        </main>
      </div>
    </>
  );
}

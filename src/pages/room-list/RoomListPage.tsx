import Header from '@/components/header/header';
import RoomCard from '@/components/room-card/RoomCard';
import RoomListFilter from '@/components/filters/room-filters';
import SearchCategoryFilter from '../../components/filters/SearchCategoryFilter';

export default function RoomListPage() {
  return (
    <>
      <Header pageType="normal" />
      <div className="flex flex-col min-h-screen">
        <SearchCategoryFilter />
        <main className="flex flex-col lg:flex-row gap-4 lg:gap-0 ">
          <RoomListFilter />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 p-4 lg:p-6 ">
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </div>
        </main>
      </div>
    </>
  );
}

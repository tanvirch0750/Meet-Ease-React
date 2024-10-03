import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGetCaegoriesQuery } from '@/redux/features/category/categoryApi';
import { selectFilters } from '@/redux/features/room/roomsSelector';
import { setCategory, setSearchQuery } from '@/redux/features/room/roomsSlice';
import { ICategory } from '@/types/categoryType';
import { SearchIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchCategoryFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const { data: categories } = useGetCaegoriesQuery({
    page: 1,
    limit: 100,
  });

  // Handle Category Change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(e.target.value));
  };

  // Handle Search Query Change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="flex flex-col gap-3 md:flex-row items-center justify-between px-4 py-4 border-b border-b-gray-100">
      <div className=" flex items-center gap-6">
        <h2 className=" text-base md:text-2xl text-gray-800 hidden md:block">
          Our Room Collections
        </h2>
        <div className=" ">
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-[344px] md:w-72 p-2 border border-gray-300 rounded bg-gray-50 text-gray-800"
          >
            <option value="">All Categories</option>
            {categories?.data?.map((category: ICategory) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <form className="flex items-center gap-2">
        <Input
          type="search"
          placeholder="Search Room"
          className=" text-gray-800 w-72 placeholder:text-gray-800 text-base py-1.5 bg-gray-50 border-gray-300 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 "
          onChange={handleSearchChange}
          value={filters.searchQuery}
        />
        <Button
          variant="outline"
          className="py-4 bg-gray-50 border-gray-300 hover:bg-gray-100"
        >
          <SearchIcon className="h-4 w-4 text-gray-800" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </header>
  );
}

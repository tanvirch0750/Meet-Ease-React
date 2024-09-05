import { selectFilters } from '@/redux/features/rooms/roomsSelector';
import {
  resetFilters,
  setCapacity,
  setPrice,
  setSortBy,
} from '@/redux/features/rooms/roomsSlice';

import { useSelector, useDispatch } from 'react-redux';

const RoomListFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  // Handle Capacity Change
  const handleCapacityChange = (e: any) => {
    const { id, checked } = e.currentTarget as HTMLInputElement;
    dispatch(
      setCapacity({
        ...filters.capacity,
        [id]: checked,
      })
    );
  };

  // Handle Price Change
  const handlePriceChange = (e: any) => {
    const { id, checked } = e.currentTarget as HTMLInputElement;
    dispatch(
      setPrice({
        ...filters.price,
        [id]: checked,
      })
    );
  };

  // Handle Sort Change
  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value));
  };

  return (
    <aside className="w-full lg:w-64 border-r border-r-gray-100 p-4 md:p-6 ">
      <div className="space-y-4">
        {/* Search */}
        {/* <div className="mb-8">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Search</h3>
          <input
            type="text"
            value={filters.searchQuery}
            onChange={handleSearchChange}
            placeholder="Search rooms..."
            className="w-full p-2 border rounded"
          />
        </div> */}

        {/* Category */}

        {/* Capacity */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Capacity</h3>
          <div className="space-y-1 mt-2 flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <input
                id="small"
                type="checkbox"
                checked={filters.capacity.small}
                onChange={handleCapacityChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="small" className="text-gray-800">
                Small (≤ 10)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="medium"
                type="checkbox"
                checked={filters.capacity.medium}
                onChange={handleCapacityChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="medium" className="text-gray-800">
                Medium (11-20)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="large"
                type="checkbox"
                checked={filters.capacity.large}
                onChange={handleCapacityChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="large" className="text-gray-800">
                Large (≥ 21)
              </label>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Price</h3>
          <div className="space-y-1 mt-2 flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <input
                id="under1000"
                type="checkbox"
                checked={filters.price.under1000}
                onChange={handlePriceChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="under1000" className="text-gray-800">
                Under 1000 BDT
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="between1000And5000"
                type="checkbox"
                checked={filters.price.between1000And5000}
                onChange={handlePriceChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="between1000And5000" className="text-gray-800">
                1000-5000 BDT
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="over5000"
                type="checkbox"
                checked={filters.price.over5000}
                onChange={handlePriceChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="over5000" className="text-gray-800">
                Over 5000 BDT
              </label>
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div className="mb-8">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Sort By</h3>
          <div className="space-y-1 mt-2">
            <div className="flex items-center space-x-2">
              <input
                id="price-asc"
                type="radio"
                name="sortBy"
                value="price-asc"
                checked={filters.sortBy === 'price-asc'}
                onChange={() => handleSortChange('price-asc')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="price-asc" className="text-gray-800">
                Price: Low to High
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="price-desc"
                type="radio"
                name="sortBy"
                value="price-desc"
                checked={filters.sortBy === 'price-desc'}
                onChange={() => handleSortChange('price-desc')}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="price-desc" className="text-gray-800">
                Price: High to Low
              </label>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => dispatch(resetFilters())}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
};

export default RoomListFilter;

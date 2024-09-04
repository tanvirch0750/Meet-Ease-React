import { RootState } from '@/redux/store';

export const selectFilters = (state: RootState) => state.filters;

export const selectFilteredAndSortedRooms =
  (rooms: any[]) => (state: RootState) => {
    const filters = selectFilters(state);

    return rooms
      .filter((room: any) => {
        if (!filters.searchQuery) return true;
        const searchLower = filters.searchQuery.toLowerCase();
        return (
          room.name.toLowerCase().includes(searchLower) ||
          room.amenities.some((amenity: string) =>
            amenity.toLowerCase().includes(searchLower)
          )
        );
      })
      .filter((room: { category: any }) => {
        if (!filters.category) return true;
        return room.category === filters.category;
      })
      .filter((room: { capacity: number }) => {
        const capacityFilters = filters.capacity;
        if (capacityFilters.small && room.capacity <= 10) return true;
        if (capacityFilters.medium && room.capacity > 10 && room.capacity <= 20)
          return true;
        if (capacityFilters.large && room.capacity > 20) return true;
        return false;
      })
      .filter((room: { pricePerSlot: number }) => {
        const priceFilters = filters.price;
        if (priceFilters.under1000 && room.pricePerSlot < 1000) return true;
        if (
          priceFilters.between1000And5000 &&
          room.pricePerSlot >= 1000 &&
          room.pricePerSlot <= 5000
        )
          return true;
        if (priceFilters.over5000 && room.pricePerSlot > 5000) return true;
        return false;
      })
      .sort((a: { pricePerSlot: number }, b: { pricePerSlot: number }) => {
        if (filters.sortBy === 'price-asc') {
          return a.pricePerSlot - b.pricePerSlot;
        } else if (filters.sortBy === 'price-desc') {
          return b.pricePerSlot - a.pricePerSlot;
        }
        return 0;
      });
  };

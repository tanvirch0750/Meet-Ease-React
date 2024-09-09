import { RootState } from '@/redux/store';

export const selectFilters = (state: RootState) => state.filters;

export const selectFilteredAndSortedRooms =
  (rooms: any[]) => (state: RootState) => {
    const filters: any = selectFilters(state);

    return rooms
      ?.filter((room: any) => {
        if (!filters?.searchQuery) return true;
        const searchLower = filters?.searchQuery?.toLowerCase();
        return (
          room.name.toLowerCase().includes(searchLower) ||
          room.amenities.some((amenity: string) =>
            amenity.toLowerCase().includes(searchLower)
          )
        );
      })
      ?.filter((room: { category: any }) => {
        if (!filters?.category) return true;
        return room?.category?._id === filters?.category;
      })
      ?.filter((room: { capacity: number }) => {
        const capacityFilters = filters?.capacity;
        if (
          filters?.capacity.large === false &&
          filters?.capacity?.medium === false &&
          filters?.capacity?.small === false
        ) {
          return true;
        }
        if (capacityFilters?.small && room?.capacity <= 10) return true;
        if (
          capacityFilters?.medium &&
          room?.capacity > 10 &&
          room?.capacity <= 20
        )
          return true;
        if (capacityFilters?.large && room?.capacity > 20) return true;
      })
      ?.filter((room: { pricePerSlot: number }) => {
        const priceFilters = filters.price;
        if (
          priceFilters.between1000And5000 === false &&
          priceFilters.over5000 === false &&
          priceFilters.under1000 === false
        ) {
          return true;
        }
        if (priceFilters.under1000 && room.pricePerSlot < 1000) return true;
        if (
          priceFilters.between1000And5000 &&
          room.pricePerSlot >= 1000 &&
          room.pricePerSlot <= 3000
        ) {
          console.log('yes');
          return true;
        }

        if (priceFilters.over5000 && room.pricePerSlot > 3000) return true;
        return false;
      })
      ?.sort((a: { pricePerSlot: number }, b: { pricePerSlot: number }) => {
        if (filters.sortBy === 'price-asc') {
          return a.pricePerSlot - b.pricePerSlot;
        } else if (filters.sortBy === 'price-desc') {
          return b.pricePerSlot - a.pricePerSlot;
        }
        return 0;
      });
  };

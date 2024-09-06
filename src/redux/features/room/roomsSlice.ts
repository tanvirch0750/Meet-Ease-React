import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CapacityFilter {
  small: boolean;
  medium: boolean;
  large: boolean;
}

interface PriceFilter {
  under1000: boolean;
  between1000And5000: boolean;
  over5000: boolean;
}

interface FiltersState {
  searchQuery: string;
  category: string;
  capacity: CapacityFilter;
  price: PriceFilter;
  sortBy: string;
}

const initialState: FiltersState = {
  searchQuery: '',
  category: '',
  capacity: {
    small: false,
    medium: false,
    large: false,
  },
  price: {
    under1000: false,
    between1000And5000: false,
    over5000: false,
  },
  sortBy: 'price-asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setCapacity(state, action: PayloadAction<CapacityFilter>) {
      state.capacity = action.payload;
    },
    setPrice(state, action: PayloadAction<PriceFilter>) {
      state.price = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setSearchQuery,
  setCategory,
  setCapacity,
  setPrice,
  setSortBy,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;

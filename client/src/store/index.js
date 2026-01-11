import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import categoriesReducer from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    eventsData: eventsReducer,
    categoriesData: categoriesReducer,
  },
});

export default store;

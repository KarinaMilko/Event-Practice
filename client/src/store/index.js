import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';

const store = configureStore({
  reducer: {
    eventsData: eventsReducer,
  },
});

export default store;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as httpApi from './../../api';

const EVENTS_SLICE_NAME = 'events';

const initialState = {
  events: [],
  isFetching: false,
  error: null,
  filter: {
    isOnline: '',
    categoryId: [], // [1, 2]
  },
};

export const getEventsThunk = createAsyncThunk(
  `${EVENTS_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await httpApi.getEvents(payload);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const eventsSlice = createSlice({
  name: EVENTS_SLICE_NAME,
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      if (typeof payload.categoryId === 'number') {
        payload.categoryId = [payload.categoryId];
      }
      state.filter = { ...state.filter, ...payload };
    },
    changeCategoriesFilter: (state, { payload }) => {
      const foundCategoryIndex = state.filter.categoryId.findIndex(
        c => c === payload
      );

      if (foundCategoryIndex === -1) {
        state.filter.categoryId.push(payload);
      } else {
        state.filter.categoryId.splice(foundCategoryIndex, 1);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getEventsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getEventsThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.events = [...payload];
    });

    builder.addCase(getEventsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = eventsSlice;

export const { setFilter, changeCategoriesFilter } = actions;

export default reducer;

import { createSlice } from '@reduxjs/toolkit';

const EVENTS_SLICE_NAME = 'events';

const initialState = {
  events: [],
  isFetching: false,
  error: null,
};

const eventsSlice = createSlice({
  name: EVENTS_SLICE_NAME,
  initialState,
  reducers: {},
});

const { reducer, actions } = eventsSlice;

// export{}=actions

export default reducer;

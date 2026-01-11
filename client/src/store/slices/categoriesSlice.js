import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as httpApi from './../../api';

const CATEGORIES_SLICE_NAME = 'categories';

const initialState = {
  categories: [],
  error: null,
};

export const getCategoriesThunk = createAsyncThunk(
  `${CATEGORIES_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await httpApi.getCategories();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const categoriesSlice = createSlice({
  name: CATEGORIES_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategoriesThunk.pending, state => {
      state.error = null;
    });
    builder.addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
      state.categories = [...payload];
    });
    builder.addCase(getCategoriesThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

const { reducer, actions } = categoriesSlice;

export default reducer;

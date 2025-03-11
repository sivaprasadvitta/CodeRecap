import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/app';

// Async thunk to fetch problems with an optional search query.
// When no query is provided and the store already has problems, the API call is skipped.
export const fetchProblems = createAsyncThunk(
  'problems/fetchProblems',
  async (query = '', thunkAPI) => {
    try {
      let response;
      if (query.trim() === '') {
        response = await api.get('/problems');
      } else {
        response = await api.get(`/problems/search?query=${encodeURIComponent(query)}`);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
  {
    condition: (query = '', { getState }) => {
      const { problems } = getState();
      // If query is empty and there are already problems, skip API call.
      if (query.trim() === '' && problems.items && problems.items.length > 0) {
        return false;
      }
    },
  }
);

const problemsSlice = createSlice({
  name: 'problems',
  initialState: {
    items: [],
    status: 'idle', // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    // Action to clear problems from the store.
    clearProblems: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProblems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProblems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearProblems } = problemsSlice.actions;
export default problemsSlice.reducer;

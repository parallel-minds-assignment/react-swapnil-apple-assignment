import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieDetails } from "../types/interfaces";
import movieService from "../services/MovieService";

export const fetchMovieDetails = createAsyncThunk(
  "movie/fetchDetails", 
  async (id: string) => {
    return await movieService.getMovieDetails(id);
  }
);

type MovieState = {
  cache: Record<string, MovieDetails>; 
  loading: boolean;
};

const initialState: MovieState = {
  cache: {}, 
  loading: false, 
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovieDetails.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.cache[action.payload.imdbID] = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovieDetails.rejected, state => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;

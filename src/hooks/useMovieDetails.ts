import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/movieSlice";
import type { RootState, AppDispatch } from "../redux/store";


export function useMovieDetails(id: string) {
  const dispatch = useDispatch<AppDispatch>();

  // Retrieve movie details from Redux cache
  const details = useSelector((state: RootState) => state.movie.cache[id]);

  useEffect(() => {
    if (!details) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id, details, dispatch]);

  return details;
}

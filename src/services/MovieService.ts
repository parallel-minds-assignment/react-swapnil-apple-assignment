import axios from "../api/axiosInstance";
import {
  IMovieService,
  MovieDetails,
  MovieSearchResponse,
} from "../types/interfaces";

class MovieServiceImpl implements IMovieService {
  
  // Search for movies based on query and page number
  async searchMovies(query: string, page: number = 1): Promise<MovieSearchResponse> {
    const response = await axios.get("", {
      params: { s: query, page },
    });

    // Return structured response with search results and total results count
    return {
      Search: response.data.Search || [],
      totalResults: parseInt(response.data.totalResults || "0"),
    };
  }

  // Get detailed information for a specific movie by its ID
  async getMovieDetails(id: string): Promise<MovieDetails> {
    const response = await axios.get("", {
      params: { i: id },
    });
    
    return response.data;
  }
}

// Instantiate the service and export it
const movieService: IMovieService = new MovieServiceImpl();
export default movieService;

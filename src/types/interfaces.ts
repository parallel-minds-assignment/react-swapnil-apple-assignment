export interface MovieSearchResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  export interface MovieDetails extends MovieSearchResult {
    Plot: string;
    Director: string;
    Actors: string;
    Genre: string;
  }
  
  export interface MovieSearchResponse {
    Search: MovieSearchResult[];
    totalResults: number;
  }
  
  export interface IMovieService {
    searchMovies(query: string, page?: number): Promise<MovieSearchResponse>;
    getMovieDetails(id: string): Promise<MovieDetails>;
  }
  
  export interface MovieDetailsProps {
    details: {
      Title: string;
      Year: string;
      Genre: string;
      Director: string;
      Plot: string;
      Poster: string;
      Runtime?: string;
    } | null;
    onClose: () => void;
  }
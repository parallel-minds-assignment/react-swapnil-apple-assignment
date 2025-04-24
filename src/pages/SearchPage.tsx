import React,{ useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailsCard from "../components/MovieDetails";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";
import movieService from "../services/MovieService";
import { MovieSearchResult } from "../types/interfaces";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import SearchBox from "../components/SearchBox";
import PaginationControls from "../components/PaginationControls";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedSearch(query);
  const [results, setResults] = useState<MovieSearchResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCache, setPageCache] = useState<Record<number, MovieSearchResult[]>>({});
  const [hasSearched, setHasSearched] = useState(false);
  const [hoveredMovieId, setHoveredMovieId] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const detail = useMovieDetails(hoveredMovieId || "");
  const loading = useSelector((state: RootState) => state.movie.loading);

  useEffect(() => {
    if (debouncedQuery) {
      setHasSearched(false);

      // Use cached results if available for current page
      if (pageCache[page]) {
        setResults(pageCache[page]);
        setHasSearched(true);
      } else {
        // Fetch results from API and cache them by page number
        movieService.searchMovies(debouncedQuery, page).then(({ Search, totalResults }) => {
            setResults(Search);
            setTotalResults(totalResults);
            setHasSearched(true);

            setPageCache((prevCache) => ({
              ...prevCache,
              [page]: Search,
            }));
          })
          .catch((error) => {
            console.error(error);
            setHasSearched(true);
          });
      }
    } else {
      // Reset state when search input is cleared
      setResults([]);
      setHasSearched(false);
      setPageCache({});
    }
  }, [debouncedQuery, page]);

  const handleHover = (id: string | null) => {
    setHoveredMovieId(id);
    setShowDetails(!!id); // Show details only if ID is not null
  };

  const totalPages = Math.ceil(totalResults / 10); // OMDB returns 10 results per page

  return (
    <div className="search-page">
      <h1 className="search-title">Movie Search</h1>
      <SearchBox
        value={query}
        onChange={(val) => {
          setQuery(val);
          setPage(1);
          setPageCache({}); // Clear previous search results cache on new search
        }}
        placeholder="Search for movies or shows..."
      />

      {hasSearched && !loading && results.length === 0 && debouncedQuery && (
        <div className="no-results">
          <p>No results found for <strong>{debouncedQuery}</strong></p>
        </div>
      )}

      <div className="results">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onHover={handleHover} />
        ))}
      </div>

      {hoveredMovieId && detail && showDetails && (
        <MovieDetailsCard details={detail} onClose={() => setShowDetails(false)} />
      )}

      {totalPages > 1 && hasSearched && (
        <PaginationControls
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default SearchPage;

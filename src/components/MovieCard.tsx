import React, { useRef, useState } from "react";
import { MovieSearchResult } from "../types/interfaces";
import defaultPoster from "../assets/png-transparent.png";

interface Props {
  movie: MovieSearchResult;
  onHover: (id: string) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onHover }) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Fallback to default image if poster is not available
  const [imgSrc, setImgSrc] = useState(
    movie.Poster === "N/A" ? defaultPoster : movie.Poster
  );

  // Delay hover event to prevent triggering on quick mouse passes
  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      onHover(movie.imdbID);
    }, 500);
  };

  // Cancel hover timer if mouse leaves early
  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  // Handle broken image links gracefully
  const handleImageError = () => {
    setImgSrc(defaultPoster);
  };

  return (
    <div className="movie-card">
      <img
        src={imgSrc}
        alt={`${movie.Title} Poster`}
        onError={handleImageError}
      />
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        tabIndex={0} // Makes div focusable for accessibility
      >
        <h3>{movie.Title}</h3>
        <p>{movie.Type}</p>
      </div>
    </div>
  );
};

// Memoize to prevent unnecessary re-renders unless props change
export default React.memo(MovieCard);

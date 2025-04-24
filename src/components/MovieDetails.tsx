import React from "react";
import "../styles/main.scss";
import { MovieDetailsProps } from "../types/interfaces";

const MovieDetails: React.FC<MovieDetailsProps> = ({ details, onClose }) => {
  // Don't render if no details are available
  if (!details) return null;

  return (
    <div className="movie-details-popup" role="dialog">
      <img
        src={details.Poster}
        alt={`${details.Title} poster`}
        className="movie-details-image"
      />
      <div className="details-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{details.Title}</h2>
        <p className="movie-details-meta">
          {details.Year}, {details.Director}
        </p>
        <div className="movie-details-runtime-genre">
          {/* Fallback to "0" if Runtime is missing */}
          <span className="runtime">{details.Runtime ?? "0"} min</span>
          <span className="genre">{details.Genre}</span>
        </div>
        <p className="movie-details-plot">{details.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

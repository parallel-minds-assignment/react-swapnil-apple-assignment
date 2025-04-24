import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';


const details = {
    Title: 'Inception',
    Year: '2010',
    Runtime: '148 min',
    Genre: 'Action, Sci-Fi',
    Plot: 'A mind-bending thriller',
    Poster: 'https://example.com/poster.jpg',
    Director: 'Christopher Nolan',  // Add Director here
  };

describe('MovieDetailsCard', () => {
  it('renders movie details correctly', () => {
    render(<MovieDetails details={details} onClose={() => {}} />);
    expect(screen.getByText(/inception/i)).toBeInTheDocument();
    expect(screen.getByText(/a mind-bending thriller/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<MovieDetails details={details} onClose={onClose} />);
    const closeBtn = screen.getByRole('button');
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });
});

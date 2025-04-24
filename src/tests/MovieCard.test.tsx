import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from '../components/MovieCard';


const movie = {
  Title: 'Inception',
  Year: '2010',
  imdbID: 'tt1375666',
  Type: 'movie',
  Poster: 'https://example.com/poster.jpg',
};

describe('MovieCard', () => {
  it('renders movie info', () => {
    render(<MovieCard movie={movie} onHover={() => {}} />);
    expect(screen.getByText(/inception/i)).toBeInTheDocument();
    expect(screen.getByText(/2010/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', movie.Poster);
  });

  it('calls onHover on mouse enter/leave', () => {
    const onHover = jest.fn();
    render(<MovieCard movie={movie} onHover={onHover} />);

    const card = screen.getByText(/inception/i).closest('div')!;
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);

    expect(onHover).toHaveBeenCalledTimes(2);
  });
});

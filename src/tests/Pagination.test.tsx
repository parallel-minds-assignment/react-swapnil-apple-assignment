import { render, screen, fireEvent } from '@testing-library/react';
import PaginationControls from '../components/PaginationControls';

describe('Pagination', () => {
  it('renders page controls and triggers callbacks', () => {
    const setPage = jest.fn();
    render(<PaginationControls currentPage={2} totalPages={5} onPageChange={setPage} />);

    const prevBtn = screen.getByRole('button', { name: /prev/i });
    const nextBtn = screen.getByRole('button', { name: /next/i });

    fireEvent.click(prevBtn);
    fireEvent.click(nextBtn);

    expect(setPage).toHaveBeenCalledTimes(2);
  });

  it('disables Previous on first page', () => {
    render(<PaginationControls currentPage={1} totalPages={5} onPageChange={() => {}} />);
    const prevBtn = screen.getByRole('button', { name: /prev/i });
    expect(prevBtn).toBeDisabled();
  });
});

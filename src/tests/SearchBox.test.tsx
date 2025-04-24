import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../components/SearchBox';


describe('SearchBox', () => {
  it('renders input and updates value on change', () => {
    const handleChange = jest.fn();
    render(<SearchBox value="" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'Batman' } });

    expect(handleChange).toHaveBeenCalled();
    expect(input).toBeInTheDocument();
  });
});

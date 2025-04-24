import { useEffect, useState } from "react";

/**
 * Custom hook to debounce a value.
 * Useful for delaying API calls (like search input) until user stops typing.
 */
export function useDebouncedSearch(value: string, delay = 500): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a delay to update the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout if value changes before delay completes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

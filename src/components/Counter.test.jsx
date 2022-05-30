import { render, fireEvent, screen } from "@testing-library/react";

import Counter from "./Counter";

test("Counter component", () => {
  render(<Counter limit={5} />);
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 0");

  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 1");
  fireEvent.click(screen.getByText(/increment/i));
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 3");
  fireEvent.click(screen.getByText(/decrement/i));
  fireEvent.click(screen.getByText(/decrement/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 1");
  expect(screen.queryByText(/^you reached the limit/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.queryByText(/^you reached the limit/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.queryByText(/^you reached the limit/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.queryByText(/^you reached the limit/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 5");
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 5");
  expect(screen.queryByText(/^you reached the limit/i)).toBeInTheDocument();
});

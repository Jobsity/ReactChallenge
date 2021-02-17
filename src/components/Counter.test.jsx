import Counter from "./Counter";
import { render, fireEvent, screen } from "@testing-library/react";

test("Counter component", () => {
  render(<Counter />);
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 0");

  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 1");
  fireEvent.click(screen.getByText(/increment/i));
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 3");
  fireEvent.click(screen.getByText(/decrement/i));
  fireEvent.click(screen.getByText(/decrement/i));
  expect(screen.getByText(/^counter:/i)).toHaveTextContent("Counter: 1");
});

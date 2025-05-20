import { render, screen } from '@testing-library/react';
import Header from './components/header';

test('renders Little Lemon text in header', () => {
  render(<Header />);
  const linkElement = screen.getByText('Little Lemon');
  expect(linkElement).toBeInTheDocument();
});

test('renders booking form with required fields', () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  // Check for required form fields
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  
  // Check if submit button exists
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});

test('validates booking form fields', () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  
  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  // Get form elements
  const dateInput = screen.getByLabelText(/date/i);
  const timeSelect = screen.getByLabelText(/time/i);
  const guestsInput = screen.getByLabelText(/guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Test date validation
  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(screen.getByText(/date is required/i)).toBeInTheDocument();

  // Test time validation
  fireEvent.change(dateInput, { target: { value: '2024-03-20' } });
  fireEvent.change(timeSelect, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(screen.getByText(/time is required/i)).toBeInTheDocument();

  // Test guests validation
  fireEvent.change(timeSelect, { target: { value: '17:00' } });
  fireEvent.change(guestsInput, { target: { value: '0' } });
  fireEvent.click(submitButton);
  expect(screen.getByText(/guests must be between 1 and 10/i)).toBeInTheDocument();

  // Test occasion validation
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
});

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  queryByAttribute,
  cleanup
} from '@testing-library/react';
import App from '../src/App';
import Shop from '../src/components/shop';
import Navbar from '../src/components/navbar';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  cleanup();
});

describe('App component', () => {
  it('renders correct headings', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/hello from my shop!/i);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/this is the navbar/i);
  });
});

describe('navbar', () => {
  it('shop link routes to correct page', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    await user.click(screen.getByText(/^Shop$/));
    await waitFor(() => {
      expect(screen.getByText(/this is the shop/i)).toBeInTheDocument();
    });
  });
});

describe('shop page', () => {
  const mockProducts = [
    { title: 'Product 1', image: 'image1.jpg' },
    { title: 'Product 2', image: 'image2.jpg' },
    { title: 'Product 3', image: 'image3.jpg' },
    { title: 'Product 4', image: 'image4.jpg' },
    { title: 'Product 5', image: 'image5.jpg' }
  ];

  beforeEach(() => {
    global.fetch = vi.fn((url) => {
      const productId = url.split('/').pop();
      const productIndex = Number(productId) - 1;
      if (productIndex >= 0 && productIndex < mockProducts.length) {
        return Promise.resolve({
          json: () => Promise.resolve(mockProducts[productIndex])
        });
      }

      return Promise.reject(new Error('Product not found'));
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('displays items from API', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
      expect(screen.getByText('Product 3')).toBeInTheDocument();
      expect(screen.getByText('Product 4')).toBeInTheDocument();
      expect(screen.getByText('Product 5')).toBeInTheDocument();
    });
  });

  it('adds item to cart when button is clicked', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    const paragraphElement = screen.getByText('0');
    expect(paragraphElement).toBeInTheDocument();
    await waitFor(() => {
      user.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]);
      const updatedParagraph = screen.getByText('1');
      expect(updatedParagraph).toBeInTheDocument();
    });
  });
});

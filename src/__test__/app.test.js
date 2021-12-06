import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';


test('loads and displays the starting app', async () => {
    render(<App />);
    const GET = await waitFor(() => screen.getByTestId("GET"));
    expect(GET).toHaveTextContent('GET');
});


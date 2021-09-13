import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
    it('Page has a header with welcome message', () => {
        render(<App/>);
        // Assign
        const header = screen.getByRole(
            'heading',
            {name: 'Welcome to the DumpsterFire that is my code'});
        // Action - none for this one

        // Assert
        expect(header).toBeVisible();
    });

    it('Page has a logo image', () => {
        render(<App/>);
        // Assign
        const logoImg = screen.getByRole(
            'img');

        // Action - none for this one

        // Assert
        expect(logoImg).toBeVisible();
    });

})

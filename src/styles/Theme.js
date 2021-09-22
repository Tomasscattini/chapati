import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
    const theme = {
        color: {
            blue: '#0D3866',
            pink: '#F25560',
            orange: '#EB943D',
            darkOrange: '#DD6B3E',
            green: '#7BA78F',
            darkGreen: '#183A36'
        },
        fonts: {
            primary: "'Chivo', sans-serif",
            secondary: " 'Neuton', serif"
        },
        device: {
            lgPhone: '@media (min-width: 426px)',
            tablet: '@media (min-width: 769px)',
            laptop: '@media (min-width: 1025px)',
            desktop: '@media (min-width: 1200px)'
        }
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
    }
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        width: 100vw;
        overflow-x: hidden;
        font-size: 16px;
    }
    * {
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .section {
        min-height: 100vh;
        width: 100vw;
    }

    .btn {
        color: white;
        background-color: ${({ theme }) => theme.color.green};
        border-radius: 9999px;
        padding: 10px 30px;
        transition: all .3s ease;
        &:hover {
            opacity: .9;
            transform: scale(1.05);
        }
    }
`;

export default GlobalStyles;

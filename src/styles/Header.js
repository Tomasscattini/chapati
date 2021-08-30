import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.green};
    .main-image {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 50%;
        height: auto;
        .blue-bg {
            position: absolute;
            width: 100%;
            z-index: 8;
            transform: translate(-5%, -5%);
        }
        .branches {
            position: relative;
            width: 80%;
            z-index: 9;
        }
    }
    .content {
        .name {
            color: ${({ theme }) => theme.color.darkGreen};
            text-transform: uppercase;
            font-weight: 900;
            font-size: 3rem;
        }
        .subtitle {
            color: ${({ theme }) => theme.color.blue};
            font-weight: normal;
            font-size: 3rem;
        }
    }
`;

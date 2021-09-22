import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10vh 0 0 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.green};
    ${({ theme }) => theme.device.tablet} {
        flex-direction: row;
        justify-content: center;
    }
    .main-image {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 75%;
        margin: 20vh 0 10vh 0;
        height: auto;
        ${({ theme }) => theme.device.tablet} {
            width: 35%;
            margin-top: 0;
        }
        .blue-bg {
            position: absolute;
            width: 100%;
            z-index: 8;
            transform: translate(-5%, -5%);
            ${({ theme }) => theme.device.tablet} {
                height: auto;
                width: 100%;
            }
        }
        .branches {
            position: relative;
            width: 80%;
            z-index: 9;
            ${({ theme }) => theme.device.tablet} {
                height: auto;
                width: 80%;
            }
        }
    }
    .content {
        margin: 0 5vw;
        transform: translate(10vw, -5vh);
        ${({ theme }) => theme.device.tablet} {
            transform: translate(-5vw, -5vh);
        }
        .name {
            color: ${({ theme }) => theme.color.darkGreen};
            text-transform: uppercase;
            font-weight: 900;
            font-size: 2rem;
            margin: 0;
            ${({ theme }) => theme.device.tablet} {
                font-size: 3.5rem;
                margin: 10px 0;
            }
        }
        .subtitle {
            color: ${({ theme }) => theme.color.blue};
            font-weight: normal;
            font-size: 2rem;
            margin: 0;
            ${({ theme }) => theme.device.tablet} {
                font-size: 3.5rem;
                margin: 10px 0;
            }
        }
    }
`;

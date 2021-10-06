import styled from 'styled-components';

export const StyledAbout = styled.main`
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.green};
    .about-header,
    .about-content {
        min-height: 100vh;
    }

    .about-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${({ theme }) => theme.device.tablet} {
            flex-direction: row;
        }
        .about-header-photos {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            min-height: 50vh;
            box-sizing: border-box;
            ${({ theme }) => theme.device.tablet} {
                min-height: auto;
                width: 50%;
                transform: none;
            }
            .photo {
                position: absolute;
                left: calc(50vw - 100px);
                top: 32vh;
                max-width: 200px;
                transition: all 0.3s ease;
                ${({ theme }) => theme.device.tablet} {
                    max-width: 400px;
                    left: auto;
                    top: auto;
                }
            }
        }
        .about-header-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 50vh;
            box-sizing: border-box;
            ${({ theme }) => theme.device.tablet} {
                min-height: auto;
                width: 50%;
                padding-left: 10vw;
            }
            .title {
                width: 60%;
                font-size: 2rem;
                transform: translateX(10%);
                ${({ theme }) => theme.device.tablet} {
                    font-size: 3.5rem;
                    transform: none;
                }
            }
            .btn-link {
                color: inherit;
                text-decoration: none;
            }
        }
    }

    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 80%;
        margin: 0 auto;
        padding-bottom: 15vh;
        ${({ theme }) => theme.device.laptop} {
            max-width: 900px;
        }
        .paragraph {
            font-size: 1.8rem;
            ${({ theme }) => theme.device.laptop} {
                font-size: 2.8rem;
            }
        }
    }
`;

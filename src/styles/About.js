import styled from 'styled-components';

export const StyledAbout = styled.section`
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
                max-width: 200px;
                ${({ theme }) => theme.device.tablet} {
                    max-width: 400px;
                }
                &.photo1 {
                    transform: translate(-30%, 15%);
                }
                &.photo2 {
                    transform: translate(30%, 15%);
                }
                &.photo3 {
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
    }
`;

import styled from 'styled-components';

export const StyledWhatWeLike = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.darkGreen};
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 35vh;
    .title {
        font-size: 3rem;
        line-height: 0.8;
        width: 90vw;
        ${({ theme }) => theme.device.lgPhone} {
            font-size: 5rem;
        }
        ${({ theme }) => theme.device.tablet} {
            font-size: 7rem;
        }
        ${({ theme }) => theme.device.desktop} {
            width: 1000px;
            font-size: 9rem;
        }
    }
    .likes {
        position: relative;
        padding: 0;
        width: 100%;
        margin: 65px 0;
        .list-item {
            position: relative;
            list-style: none;
            width: 100%;
            font-size: 3rem;
            padding-left: 10vw;
            cursor: pointer;
            color: ${({ theme }) => theme.color.blue};
            border-bottom: 3px solid ${({ theme }) => theme.color.blue};
            z-index: 1;
            transition: color 0.3s ease;
            ${({ theme }) => theme.device.tablet} {
                font-size: 6rem;
                padding-left: 20vw;
            }
            ${({ theme }) => theme.device.laptop} {
                font-size: 8rem;
                padding-left: 20vw;
            }
            &:hover {
                z-index: 999;
                border-color: transparent;
            }
            &.comunidad:hover {
                color: ${({ theme }) => theme.color.pink};
            }
            &.huerta:hover {
                color: ${({ theme }) => theme.color.green};
            }
        }
        .details {
            position: absolute;
            opacity: 0;
            top: -25vh;
            left: 5vw;
            width: 85vw;
            transform: scale(0.01);
            transform-origin: center center;
            transition: all 0.3s ease;
            transition: all 0.3s ease;
            z-index: 2;
            ${({ theme }) => theme.device.lgPhone} {
                top: -25vh;
            }
            ${({ theme }) => theme.device.tablet} {
                top: -30vh;
                left: 25vw;
                width: 65vw;
            }
            ${({ theme }) => theme.device.laptop} {
                top: -50vh;
                width: 1000px;
            }
            img {
                position: relative;
                width: 100%;
            }
            .content {
                position: absolute;
                top: 22%;
                left: 31%;
                width: 60%;
                color: white;
                font-size: 0.8rem;
                ${({ theme }) => theme.device.lgPhone} {
                    font-size: 1rem;
                    top: 50%;
                }
                ${({ theme }) => theme.device.tablet} {
                    font-size: 1.3rem;
                    left: 23%;
                    top: 55%;
                    width: 65%;
                }
                ${({ theme }) => theme.device.laptop} {
                    font-size: 1.8rem;
                    left: 30%;
                    top: 22%;
                }
                ${({ theme }) => theme.device.desktop} {
                    font-size: 2.5rem;
                    left: 28%;
                    top: 45%;
                }
                &.huerta-content {
                    left: 28%;
                    top: 35%;
                    ${({ theme }) => theme.device.lgPhone} {
                        top: 25%;
                        left: 34%;
                    }
                    ${({ theme }) => theme.device.tablet} {
                        left: 30%;
                        top: 30%;
                    }
                    ${({ theme }) => theme.device.laptop} {
                        left: 25%;
                        top: 38%;
                    }
                    ${({ theme }) => theme.device.desktop} {
                        top: 55%;
                        left: 20%;
                    }
                }
                &.carpinteria-content {
                    top: 35%;
                    left: 30%;
                    ${({ theme }) => theme.device.tablet} {
                        left: 25%;
                        top: 40%;
                    }
                    ${({ theme }) => theme.device.desktop} {
                        top: 32%;
                        left: 29%;
                    }
                }
            }
            &.show {
                opacity: 1;
                transform: scale(1);
            }
        }
    }
`;

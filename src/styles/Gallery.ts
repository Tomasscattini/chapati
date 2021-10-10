import styled from 'styled-components';

export const StyledGallery = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.color.green};
    overflow: hidden;
    .gallery-wrapper {
        position: absolute;
        width: calc(100vw + 200px);
        height: 280px;
        bottom: 20vh;
        display: flex;
        animation: scroll 40s linear infinite;
        &:hover {
            animation-play-state: paused;
        }
        .photo {
            margin: 0 15px;
            height: 100%;
            cursor: pointer;
            transition: all 0.3s ease;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-442px * 10));
        }
    }
`;

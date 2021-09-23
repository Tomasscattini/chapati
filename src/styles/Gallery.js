import styled from 'styled-components';

export const StyledGallery = styled.section`
    position: relative;
    background-color: ${({ theme }) => theme.color.green};
    .gallery-wrapper {
        position: absolute;
        width: calc(100vw + 200px);
        height: 280px;
        overflow: hidden;
        bottom: 20vh;
        display: flex;
        transform: translateX(-200px);
        .photo {
            margin: 0 15px;
            height: 100%;
        }
    }
`;

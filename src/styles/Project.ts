import styled from 'styled-components';

export const StyledProject = styled.section`
    background-color: ${({ theme }) => theme.color.darkOrange};
    color: ${({ theme }) => theme.color.blue};
    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 80%;
        height: 100vh;
        margin: 0 auto;
        padding: 15vh 0;
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

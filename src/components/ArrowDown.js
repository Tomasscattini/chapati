import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99;
    bottom: 40px;
    right: 5vw;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        transform: scale(1.15);
    }
`;

const ArrowDown = () => {
    return (
        <StyledArrow>
            <img src="images/arrow-down.svg" alt="Arrow down" />
        </StyledArrow>
    );
};

export default ArrowDown;

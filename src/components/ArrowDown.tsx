import React from 'react';
import { HashLink } from 'react-router-hash-link';
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
    &.rotate {
        transform: rotate(-180deg);
        &:hover {
            transform: rotate(-180deg) scale(1.15);
        }
    }
    &:hover {
        transform: scale(1.15);
    }
`;

interface Props {
    currentSection: string | null;
}

const ArrowDown: React.FC<Props> = ({ currentSection = 'default' }) => {
    let nextSection;

    switch (currentSection) {
        case 'top':
            nextSection = '#about';
            break;
        case 'about':
            nextSection = '#gallery';
            break;
        case 'gallery':
            nextSection = '#project';
            break;
        case 'project':
            nextSection = '#contact';
            break;
        case 'contact':
            nextSection = '#top';
            break;
        default:
            nextSection = '#about';
    }

    return (
        <StyledArrow className={nextSection === '#top' ? 'rotate' : ''}>
            <HashLink to={nextSection}>
                <img src="images/arrow-down.svg" alt="Arrow down" />
            </HashLink>
        </StyledArrow>
    );
};

export default ArrowDown;

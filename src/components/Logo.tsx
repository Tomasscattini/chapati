import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

const StyledLogo = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    width: 100vw;
    height: 60px;
    margin-top: 5vh;
    .brand {
        width: 200px;
    }
`;

interface Props {
    blue?: boolean;
}

const Logo: React.FC<Props> = ({ blue }) => {
    return (
        <StyledLogo>
            <HashLink to="#top">
                <img className="brand" src={blue ? 'images/logob.png' : 'images/logow.png'} alt="Brand" />
            </HashLink>
        </StyledLogo>
    );
};

export default Logo;

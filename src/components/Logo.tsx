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
    .brand {
        width: 120px;
    }
`;

interface Props {
    blue?: boolean;
}

const Logo: React.FC<Props> = ({ blue }) => {
    return (
        <StyledLogo>
            <HashLink to="#top">
                <img
                    className="brand"
                    src={blue ? 'images/logochapati.png' : 'images/logochapati-white.png'}
                    alt="Brand"
                />
            </HashLink>
        </StyledLogo>
    );
};

export default Logo;

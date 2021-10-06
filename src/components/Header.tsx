import React from 'react';
import { StyledHeader } from '../styles/Header';

interface Props {
    id?: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <StyledHeader {...props} className="section">
            <div className="main-image">
                <img className="blue-bg" src="images/vectorb.svg" alt="Blue background" />
                <img className="branches" src="images/main-header.png" alt="Main" />
            </div>
            <div className="content">
                <h1 className="name">chapati</h1>
                <h3 className="subtitle">
                    experimento
                    <br />
                    isleño
                </h3>
            </div>
        </StyledHeader>
    );
};

export default Header;

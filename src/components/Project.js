import React from 'react';
import { StyledProject } from '../styles/Project';

const Project = (props) => {
    return (
        <StyledProject {...props} className="section">
            <div className="content-wrapper">
                <p className="paragraph">
                    Hoy siguemos explorando nuevas formas de vivir. Encontramos en la carpintería y la huerta, formas de
                    vida que se alinean a nustros valores y deseos. Tenemos ganas de seguir compartiendo con todo aquel
                    que sienta ganas de vivir de una forma más consciente y en armonía con la naturaleza.
                </p>
            </div>
        </StyledProject>
    );
};

export default Project;

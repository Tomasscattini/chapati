import React, { useState } from 'react';
import { StyledWhatWeLike } from '../styles/WhatWeLike';

interface Props {
    id?: string;
}

const WhatWeLike: React.FC<Props> = (props) => {
    const [showIsland, setShowIsland] = useState<number | null>(null);

    const handleShowIsland = (island?: number) => {
        if (!island) return setShowIsland(null);
        setShowIsland(island);
    };

    return (
        <StyledWhatWeLike {...props}>
            <h2 className="title">Qué nos gusta hacer?</h2>
            <ul className="likes">
                <li
                    onMouseEnter={() => handleShowIsland(1)}
                    onMouseLeave={() => handleShowIsland()}
                    className="list-item comunidad"
                >
                    Comunidad <span className="arrow">{'>'}</span>
                </li>
                <li
                    onMouseEnter={() => handleShowIsland(2)}
                    onMouseLeave={() => handleShowIsland()}
                    className="list-item huerta"
                >
                    Huerta <span className="arrow">{'>'}</span>
                </li>
                <li
                    onMouseEnter={() => handleShowIsland(3)}
                    onMouseLeave={() => handleShowIsland()}
                    className="list-item carpinteria"
                >
                    Carpintería <span className="arrow">{'>'}</span>
                </li>
                <div className={`details ${showIsland === 1 ? 'show' : ''}`}>
                    <img src="images/vectorb.svg" alt="Blue Island" />
                    <p className="content comunidad-content">
                        Hace más de seis años nos mueven las ganas hacer colectivamente. En Chapati buscamos habitar un
                        espacio en armonía con el entorno, consciente, inclusivo y sustentable
                    </p>
                </div>
                <div className={`details ${showIsland === 2 ? 'show' : ''}`}>
                    <img src="images/vectorg.svg" alt="Green Island" />
                    <p className="content huerta-content">
                        Trabajar la tierra, plantar nuestro alimento, cosechar de nuestra huerta. Llevamos ya un tiempo
                        aprendiendo y transitando a una forma de vivir más autónoma.{' '}
                    </p>
                </div>
                <div className={`details ${showIsland === 3 ? 'show' : ''}`}>
                    <img src="images/vectoro.svg" alt="Orange Island" />
                    <p className="content carpinteria-content">
                        Desde el comienzo del proyecto hemos estado aprendiendo este hermoso oficio. La construcción del
                        espacio fue colectiva utilizando técnicas de carpintería tradicional.
                    </p>
                </div>
            </ul>
        </StyledWhatWeLike>
    );
};

export default WhatWeLike;

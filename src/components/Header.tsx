import React, { useLayoutEffect } from 'react';
import { StyledHeader } from '../styles/Header';

interface Props {
    gsap: any;
    scrollTrigger: any;
    id?: string;
}

const Header: React.FC<Props> = ({ gsap, scrollTrigger, ...rest }) => {
    gsap.registerPlugin(scrollTrigger);

    useLayoutEffect(() => {
        gsap.to('.blue-bg', {
            scale: 5,
            duration: 5,
            scrollTrigger: {
                trigger: '.blue-bg',
                start: 'top top+=100',
                scrub: true
            }
        });
        gsap.to('.branches', {
            opacity: 0,
            scale: 0.8,
            duration: 5,
            scrollTrigger: {
                trigger: '.blue-bg',
                start: 'top top+=100',
                scrub: true
            }
        });
    }, [gsap]);

    return (
        <StyledHeader {...rest} className="section">
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

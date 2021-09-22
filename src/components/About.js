import React from 'react';
import { StyledAbout } from '../styles/About';
import { HashLink } from 'react-router-hash-link';

const About = () => {
    const photos = [
        { src: 'images/about3.png', alt: 'About 3', className: 'photo1' },
        { src: 'images/about2.png', alt: 'About 2', className: 'photo2' },
        { src: 'images/about1.png', alt: 'About 1', className: 'photo3' }
    ];

    return (
        <StyledAbout id="about" className="section">
            <div className="about-header">
                <div className="about-header-photos">
                    {photos.map((photo, i) => (
                        <img className={`photo ${photo.className}`} key={i} src={photo.src} alt={photo.alt} />
                    ))}
                </div>

                <div className="about-header-title">
                    <h2 className="title">un proyecto colectivo</h2>
                    <HashLink to="#project" className="btn-link">
                        <div className="btn">Nuestra historia</div>
                    </HashLink>
                </div>
            </div>

            <div className="about-content"></div>
        </StyledAbout>
    );
};

export default About;

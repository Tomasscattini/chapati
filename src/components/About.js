import React, { useLayoutEffect } from 'react';
import { StyledAbout } from '../styles/About';
import { HashLink } from 'react-router-hash-link';

const photos = [
    { src: 'images/about3.png', alt: 'About 3', className: 'about-photo1' },
    { src: 'images/about2.png', alt: 'About 2', className: 'about-photo2' },
    { src: 'images/about1.png', alt: 'About 1', className: 'about-photo3' }
];

const About = ({ gsap, scrollTrigger, ...rest }) => {
    gsap.registerPlugin(scrollTrigger);

    const options = {
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
            trigger: '.about-photo3',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        }
    };

    useLayoutEffect(() => {
        gsap.fromTo(
            '.about-photo3',
            {
                x: '-500',
                opacity: 0
            },
            {
                ...options,
                delay: 0.3,
                x: '0'
            }
        );
        gsap.fromTo(
            '.about-photo1',
            {
                x: '-500',
                opacity: 0
            },
            {
                x: '-80',
                y: '30',
                delay: 0.5,
                ...options
            }
        );
        gsap.fromTo(
            '.about-photo2',
            {
                x: '-500',
                opacity: 0
            },
            {
                x: '80',
                y: '30',
                ...options
            }
        );
        // eslint-disable-next-line
    }, [gsap]);

    return (
        <StyledAbout {...rest} className="section">
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

            <div className="about-content">
                <p className="paragraph">
                    En 2016, un grupo de amigos viajeros de Argentina y Francia, comienza a construir un lugar donde
                    compartir experiencias, aprender colectivamente y sobre todo, intentar crear una comunidad que
                    refleje todo aquello que aprendieron del movimiento, de los intercambios y la exposición a
                    diferentes culturas.
                </p>
                <p className="paragraph">
                    Con el tiempo Chapati fue mutando en sus dinámicas, nuevas personas se sumaron, y otras siguieron
                    explorando el mundo. Sin embargo, el espíritu y las ganas de compartir sostienen este experimento
                    isleño.
                </p>
            </div>
        </StyledAbout>
    );
};

export default About;

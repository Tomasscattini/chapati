import React, { useLayoutEffect, useState, useRef } from 'react';
import { StyledAbout } from 'styles/About';
import { HashLink } from 'react-router-hash-link';

interface Props {
    gsap: any;
    scrollTrigger: any;
    id?: string;
}

const About: React.FC<Props> = ({ gsap, scrollTrigger, ...rest }) => {
    const [reset, setReset] = useState<boolean | null>(null);
    gsap.registerPlugin(scrollTrigger);

    const $photo1 = useRef<HTMLImageElement | null>(null);
    const $photo2 = useRef<HTMLImageElement | null>(null);
    const $photo3 = useRef<HTMLImageElement | null>(null);

    const photos = [
        { src: 'images/about3.jpeg', alt: 'About 3', className: 'about-photo1', ref: $photo1 },
        { src: 'images/about2.jpeg', alt: 'About 2', className: 'about-photo2', ref: $photo2 },
        { src: 'images/about1.jpeg', alt: 'About 1', className: 'about-photo3', ref: $photo3 }
    ];

    const [topPhoto, setTopPhoto] = useState<HTMLImageElement | null>(null);

    const options = {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.about-photo3',
            start: 'top center+=200',
            end: 'bottom top+=200',
            paused: true,
            toggleActions: 'play none none reset'
        }
    };

    useLayoutEffect(() => {
        const photoEnter = [
            gsap.fromTo(
                '.about-photo3',
                {
                    x: '-500',
                    y: '0',
                    rotation: 0,
                    opacity: 0,
                    scale: 1
                },
                {
                    ...options,
                    delay: 0.3,
                    x: '0',
                    scale: 1.05
                }
            ),
            gsap.fromTo(
                '.about-photo1',
                {
                    x: '-500',
                    y: '0',
                    rotation: 0,
                    opacity: 0,
                    scale: 1
                },
                {
                    x: '-80',
                    y: '30',
                    rotation: -10,
                    delay: 0.5,
                    ...options
                }
            ),
            gsap.fromTo(
                '.about-photo2',
                {
                    x: '-500',
                    y: '0',
                    rotation: 0,
                    opacity: 0,
                    scale: 1
                },
                {
                    x: '80',
                    y: '30',
                    rotation: 10,
                    ...options
                }
            )
        ];
        if ($photo3?.current) setTopPhoto($photo3.current);
        if (reset !== null) photoEnter.forEach((effect) => effect.play());
        // eslint-disable-next-line
    }, [$photo3, gsap, reset]);

    const handleHover = (leave?: boolean) => {
        const hover = gsap.to(topPhoto, {
            scale: 1.1,
            cursor: 'pointer',
            duration: 0.1,
            paused: true,
            ease: 'none'
        });
        const reverse = gsap.to(topPhoto, {
            scale: 1,
            duration: 0.1,
            paused: true,
            ease: 'none'
        });
        if (leave) return reverse.play();
        hover.play();
    };

    const changePhoto = () => {
        const fall = gsap.to(topPhoto, {
            y: '100vh',
            opacity: 0,
            duration: 0.4,
            paused: true,
            ease: 'power1.in'
        });

        const straightenPhoto = (photo: HTMLImageElement | null) =>
            gsap.to(photo, {
                rotation: 0,
                scale: 1.05,
                paused: true,
                duration: 0.4,
                ease: 'power1.in'
            });

        fall.play();

        if (topPhoto === $photo1.current) {
            return setReset((reset) => !reset);
        } else if (topPhoto === $photo3.current) {
            setTopPhoto($photo2.current);
            straightenPhoto($photo2.current).play();
        } else if (topPhoto === $photo2.current) {
            setTopPhoto($photo1.current);
            straightenPhoto($photo1.current).play();
        }
    };

    return (
        <StyledAbout {...rest} className="section">
            <div className="about-header">
                <div className="about-header-photos">
                    {photos.map((photo, i) => (
                        <img
                            ref={photo.ref}
                            className={`photo ${photo.className}`}
                            key={i}
                            src={photo.src}
                            alt={photo.alt}
                            onMouseEnter={() => handleHover()}
                            onMouseLeave={() => handleHover(true)}
                            onClick={changePhoto}
                        />
                    ))}
                </div>

                <div className="about-header-title">
                    <h2 className="title">un proyecto colectivo</h2>
                    <HashLink to="#story" className="btn-link">
                        <div className="btn">Nuestra historia</div>
                    </HashLink>
                </div>
            </div>

            <div id="story" className="about-content">
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

import React, { useState } from 'react';
//* General imports

import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//* Styles

import Theme from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';

//* General components

import Logo from 'components/Logo';
import ArrowDown from 'components/ArrowDown';
import Menu from 'components/Menu';

//* Section components

import Header from 'components/Header';
import About from 'components/About';
import Gallery from 'components/Gallery';
import Project from 'components/Project';
import WhatWeLike from 'components/WhatWeLike';
import Contact from 'components/Contact';

const App: React.FC = () => {
    const [blueLogo, setBlueLogo] = useState<boolean>(true);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    gsap.registerPlugin(ScrollTrigger);

    const menuRef: React.Ref<HTMLDivElement> | undefined | null = useRef(null);

    useLayoutEffect(() => {
        const element = '#menu .list';
        const options = (section: string) => ({
            trigger: section,
            start: 'top center-=200',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
            toggleClass: {
                targets: `${element}`,
                className: section.split('#')[1]
            },
            onEnter: (properties: any) => {
                if (section === '#about') setBlueLogo(false);
                setCurrentSection(properties.trigger.id);
            },
            onLeaveBack: (properties: any) => {
                if (section === '#about') setBlueLogo(true);
                if (properties.trigger.id === 'about') setCurrentSection('top');
                if (properties.trigger.id === 'gallery') setCurrentSection('about');
                if (properties.trigger.id === 'project') setCurrentSection('gallery');
                if (properties.trigger.id === 'separator') setCurrentSection('project');
            }
        });
        ScrollTrigger.create(options('#about'));
        ScrollTrigger.create(options('#gallery'));
        ScrollTrigger.create(options('#project'));
        ScrollTrigger.create(options('#what-we-like'));
        ScrollTrigger.create(options('#separator'));
        ScrollTrigger.create(options('#contact'));
    }, []);

    return (
        <Router>
            <Theme>
                <GlobalStyles />
                <Logo blue={blueLogo} />
                <Menu id="menu" ref={menuRef} />
                <ArrowDown currentSection={currentSection} />
                <Header />
                <About gsap={gsap} scrollTrigger={ScrollTrigger} id="about" />
                <Gallery id="gallery" />
                <Project id="project" />
                <WhatWeLike id="what-we-like" />
                <hr
                    style={{
                        position: 'relative',
                        visibility: 'hidden',
                        height: 0,
                        margin: 0,
                        border: '1px solid #183A36',
                        zIndex: 0
                    }}
                    id="separator"
                />
                <Contact id="contact" />
            </Theme>
        </Router>
    );
};

export default App;

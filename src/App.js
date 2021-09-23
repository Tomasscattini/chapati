//* General imports

import { useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//* Styles

import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

//* General components

import Logo from './components/Logo';
import ArrowDown from './components/ArrowDown';
import Menu from './components/Menu';

//* Section components

import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
    gsap.registerPlugin(ScrollTrigger);

    const menuRef = useRef(null);

    useLayoutEffect(() => {
        const element = '#menu .anchor-link';
        const options = (color, section) => ({
            duration: 0.3,
            color,
            scrollTrigger: {
                trigger: section,
                start: 'top center-=200',
                toggleActions: 'play none none reverse'
            }
        });
        gsap.to(element, options('#ffffff', '#about'));
        gsap.to(element, options('#0D3866', '#project'));
        gsap.to(element, options('#ffffff', '#contact'));
    }, []);

    return (
        <Router>
            <Theme>
                <GlobalStyles />
                <Logo />
                <Menu id="menu" ref={menuRef} />
                <ArrowDown />
                <Header />
                <About id="about" />
                <Gallery id="gallery" />
                <Project id="project" />
                <Contact id="contact" />
            </Theme>
        </Router>
    );
}

export default App;

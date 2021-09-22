import { BrowserRouter as Router } from 'react-router-dom';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

import Logo from './components/Logo';
import ArrowDown from './components/ArrowDown';
import Menu from './components/Menu';

import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <Theme>
                <GlobalStyles />
                <Logo />
                <Menu />
                <ArrowDown />
                <Header />
                <About />
                <Gallery />
                <Project />
                <Contact />
            </Theme>
        </Router>
    );
}

export default App;

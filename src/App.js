import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

import Logo from './components/Logo';
import Menu from './components/Menu';
import Header from './components/Header';

function App() {
    return (
        <Theme>
            <GlobalStyles />
            <Logo />
            <Menu />
            <Header />
        </Theme>
    );
}

export default App;

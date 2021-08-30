import { StyledHeader } from '../styles/Header';

function Header() {
    return (
        <StyledHeader>
            <div className="main-image">
                <img className="blue-bg" src="images/blue-vector.png" alt="Blue background" />
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
}

export default Header;

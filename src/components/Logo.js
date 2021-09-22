import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const StyledLogo = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    width: 100vw;
    height: 60px;
    .brand {
        width: 120px;
    }
`;

function Logo({ color }) {
    return (
        <StyledLogo>
            <HashLink to="#top">
                <img className="brand" src="images/logochapati.svg" alt="Brand" />
            </HashLink>
        </StyledLogo>
    );
}

export default Logo;

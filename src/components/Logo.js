import styled from 'styled-components';

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
            <img className="brand" src="images/logochapati.svg" alt="Brand" />
        </StyledLogo>
    );
}

export default Logo;

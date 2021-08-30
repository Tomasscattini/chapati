import styled from 'styled-components';

const StyledMenu = styled.nav`
    position: fixed;
    z-index: 99;
`;

function Menu() {
    return <StyledMenu>menu</StyledMenu>;
}

export default Menu;

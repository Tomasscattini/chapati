import { forwardRef } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const StyledMenu = styled.nav`
    position: fixed;
    z-index: 99;
    padding: 10vh 5vw;
    right: 0;
    ${({ theme }) => theme.device.tablet} {
        right: auto;
        left: 0;
    }
    .list {
        margin: 0;
        padding: 0;
        .anchor-link {
            color: ${({ theme }) => theme.color.blue};
            text-decoration: none;
            .list-item {
                list-style: none;
                margin: 5px 0;
                padding: 0;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                &:hover {
                    transform: scale(1.15);
                }
                ${({ theme }) => theme.device.tablet} {
                    font-size: 1.4rem;
                    margin: 10px 0;
                }
            }
        }
    }
`;

const menuItems = [
    {
        name: 'about',
        link: '#about'
    },
    {
        name: 'el proyecto',
        link: '#project'
    },
    {
        name: 'contacto',
        link: '#contact'
    }
];

const Menu = forwardRef((props, ref) => {
    return (
        <StyledMenu {...props} ref={ref}>
            <ul className="list">
                {menuItems.map((item, index) => (
                    <HashLink className="anchor-link" key={item.link + index} to={item.link}>
                        <li className="list-item">{item.name}</li>
                    </HashLink>
                ))}
            </ul>
        </StyledMenu>
    );
});

export default Menu;

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
                position: relative;
                list-style: none;
                margin: 5px 0;
                padding: 0;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                &.current::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -20%;
                    height: 50%;
                    width: 140%;
                    border-bottom: 2px solid ${({ theme }) => theme.color.darkOrange};
                    animation: 0.2s 1 linear grow;
                }
                &.current {
                    &.project {
                        color: white;
                        &::after {
                            border-color: ${({ theme }) => theme.color.blue};
                        }
                    }
                    &.contact {
                        color: ${({ theme }) => theme.color.darkOrange};
                    }
                }
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
    @keyframe grow {
        from {
            width: 0;
        }
        to {
            width: 140%;
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
                        <li className={`list-item ${item.link.split('#')[1]}`}>{item.name}</li>
                    </HashLink>
                ))}
            </ul>
        </StyledMenu>
    );
});

export default Menu;

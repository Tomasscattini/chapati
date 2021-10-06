import React, { forwardRef } from 'react';
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
                &::after {
                    content: '';
                    position: absolute;
                    visibility: hidden;
                    top: 0;
                    left: -20%;
                    height: 50%;
                    width: 10%;
                    border-bottom: 2px solid ${({ theme }) => theme.color.darkOrange};
                    transform-origin: left center;
                    transition: all 0.6s ease;
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
        &.about .anchor-link {
            color: white;
            .about::after {
                visibility: visible;
                width: 140%;
                border-color: ${({ theme }) => theme.color.darkOrange};
            }
        }
        &.gallery .anchor-link {
            color: white;
        }
        &.project .anchor-link,
        &.what-we-like .anchor-link {
            color: ${({ theme }) => theme.color.blue};
            .project {
                color: white;
                &::after {
                    visibility: visible;
                    width: 140%;
                    border-color: ${({ theme }) => theme.color.blue};
                }
            }
        }
        &.contact .anchor-link {
            color: white;
            .project::after {
                visibility: hidden;
            }
            .contact {
                color: ${({ theme }) => theme.color.darkOrange};
                &::after {
                    visibility: visible;
                    width: 140%;
                }
            }
        }
    }
`;

const menuItems = [
    {
        name: 'el proyecto',
        link: '#about',
        className: 'about'
    },
    {
        name: 'lo que hacemos',
        link: '#project',
        className: 'project'
    },
    {
        name: 'contacto',
        link: '#contact',
        className: 'contact'
    }
];

interface Props {
    id?: string;
}

const Menu = forwardRef<HTMLDivElement, Props>(({ id }, ref) => {
    return (
        <StyledMenu id={id} ref={ref}>
            <ul className="list">
                {menuItems.map((item, index) => (
                    <HashLink className="anchor-link" key={item.link + index} to={item.link}>
                        <li className={`list-item ${item.className}`}>{item.name}</li>
                    </HashLink>
                ))}
            </ul>
        </StyledMenu>
    );
});

export default Menu;

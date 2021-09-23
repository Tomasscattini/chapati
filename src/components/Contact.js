import React from 'react';
import { StyledContact } from '../styles/Contact';

const email = 'chapati.delta@gmail.com';
const socialMedia = [
    { name: 'instagram', url: 'https://www.instagram.com/chapatidelta', className: 'instagram' },
    { name: 'whatsapp', url: '+541198787845', type: 'tel', className: 'tel' }
];

const Contact = (props) => {
    return (
        <StyledContact {...props} className="section">
            <h4 className="question">alguna pregunta?</h4>
            <a className="email" href={`mailto:${email}`}>
                {email}
            </a>
            <div className="social-media">
                <ul>
                    {socialMedia.map((link, index) => (
                        <li key={index}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                className={`link ${link.className}`}
                                href={`${link.type === 'tel' ? 'tel:' : ''}${link.url}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledContact>
    );
};

export default Contact;

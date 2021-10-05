import React from 'react';
import { StyledGallery } from '../styles/Gallery';

const pictures = [
    {
        src: 'images/gallery1.png',
        alt: 'Photo 1',
        className: 'photo1'
    },
    {
        src: 'images/gallery2.png',
        alt: 'Photo 2',
        className: 'photo2'
    },
    {
        src: 'images/gallery3.png',
        alt: 'Photo 3',
        className: 'photo3'
    },
    {
        src: 'images/gallery5.jpg',
        alt: 'Photo 4',
        className: 'photo4'
    },
    {
        src: 'images/gallery6.jpg',
        alt: 'Photo 5',
        className: 'photo5'
    }
];

interface Props {
    id?: string;
}

const Gallery: React.FC<Props> = (props) => {
    return (
        <StyledGallery {...props} className="section">
            <div className="gallery-wrapper">
                {pictures.map((picture) => (
                    <img
                        key={picture.className}
                        className={`photo ${picture.className}`}
                        src={picture.src}
                        alt={picture.alt}
                    />
                ))}
            </div>
        </StyledGallery>
    );
};

export default Gallery;

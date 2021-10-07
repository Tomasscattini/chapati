import React from 'react';
import { StyledGallery } from '../styles/Gallery';

const createImg = (num: number, extension?: string) => ({
    src: `images/gallery${num}${extension ? extension : '.jpeg'}`,
    alt: `Photo ${num}`,
    className: `photo${num}`
});

const pictures = [
    createImg(1),
    createImg(2),
    createImg(3),
    createImg(4),
    createImg(5),
    createImg(6),
    createImg(7),
    createImg(8, '.png'),
    createImg(10, '.jpg'),
    createImg(11, '.jpg')
];

interface Props {
    id?: string;
}

const Gallery: React.FC<Props> = (props) => {
    return (
        <StyledGallery {...props} className="section">
            <div className="gallery-wrapper">
                {pictures.map((picture, index) => (
                    <img
                        key={picture.className + index}
                        className={`photo ${picture.className}`}
                        src={picture.src}
                        alt={picture.alt}
                    />
                ))}
                {pictures.map((picture, index) => (
                    <img
                        key={picture.className + index}
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

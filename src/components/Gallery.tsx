import React, { useState } from 'react';
import ImagePopup from 'components/ImagePopup';
import { StyledGallery } from '../styles/Gallery';

export interface ImageType {
    src: string;
    alt: string;
    className: string;
}

const createImg = (num: number, extension?: string) => ({
    src: `images/gallery${num}${extension ? extension : '.jpeg'}`,
    alt: `Photo ${num}`,
    className: `photo${num}`
});

const pictures: ImageType[] = [
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
    const [openedImage, setOpenedImage] = useState<ImageType | null>(null);

    const handleClose = () => {
        setOpenedImage(null);
    };

    return (
        <StyledGallery {...props} className="section">
            <div className="gallery-wrapper">
                {[...pictures, ...pictures].map((picture, index) => (
                    <img
                        key={picture.className + index}
                        onClick={() => setOpenedImage(picture)}
                        className={`photo ${picture.className}`}
                        src={picture.src}
                        alt={picture.alt}
                    />
                ))}
            </div>
            <ImagePopup image={openedImage} open={openedImage ? true : false} close={handleClose} />
        </StyledGallery>
    );
};

export default Gallery;

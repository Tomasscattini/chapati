import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageType } from './Gallery';

const StyledImagePopup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    animation: fadeIn 0.4s;
    &.closing {
        animation: fadeOut 0.4s;
        .close-btn {
            animation: fadeOutBtn 0.4s;
        }
        .image {
            animation: shrink 0.4s;
        }
    }
    .close-btn {
        position: absolute;
        top: 5vh;
        right: 5vw;
        color: white;
        border: 1px solid white;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
        p {
            text-align: center;
            margin: 0;
            line-height: 25px;
        }
    }
    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 90%;
        max-height: 80vh;
        overflow: hidden;
        animation: grow 0.4s;
        transform-origin: center center;
        ${({ theme }) => theme.device.desktop} {
            max-width: 1100px;
        }
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
    @keyframes fadeIn {
        from {
            background: transparent;
        }
    }
    @keyframes fadeOut {
        to {
            background: transparent;
        }
    }
    @keyframes fadeOutBtn {
        to {
            opacity: 0;
        }
    }
    @keyframes grow {
        from {
            transform: scale(0);
        }
    }
    @keyframes shrink {
        to {
            transform: scale(0);
        }
    }
`;

interface Props {
    id?: string;
    className?: string;
    image: ImageType | null;
    isOpen: boolean;
    close: () => void;
}

const ImagePopup: React.FC<Props> = ({ image, isOpen, close, ...rest }) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            close();
            setIsClosing(false);
        }, 400);
    };

    if (!isOpen) return null;
    return (
        <StyledImagePopup {...rest} className={isClosing ? 'closing' : ''}>
            <div onClick={handleClose} className="close-btn">
                <p>X</p>
            </div>
            <div className="image">{image && <img src={image.src} alt={image.alt} />}</div>
        </StyledImagePopup>
    );
};

export default ImagePopup;

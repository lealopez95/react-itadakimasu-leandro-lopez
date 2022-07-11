import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ shouldLink = false, link = '/', logoSrc, altLogo, containerClassName='', imgClassName='' }) => {
    const showWithLink = () => {
        return (
            <Link className={containerClassName} to={link}>
                {renderImage()}
            </Link>
        )
    }

    const renderImage = () => {
        return <img className={imgClassName} src={logoSrc} alt={altLogo} />
    }
    
    return (
        shouldLink ? showWithLink() : renderImage()
    )
}

export default Logo;
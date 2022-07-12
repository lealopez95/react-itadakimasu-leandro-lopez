import React from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import logoSrc from '../../img/logos/logo_1.png';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Header = ({pages}) => (
    <header className='header'>
        <Logo 
            shouldLink={true}
            logoSrc={logoSrc}
            altLogo={`Logo Itadakimasu!`}
            containerClassName={'header-logo'}
        />
        <NavBar pagesList={pages} />
        <CartWidget />
    </header>
);


export default Header;
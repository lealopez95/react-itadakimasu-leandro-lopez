import React from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';
import logoSrc from '../../img/logos/logo_1.png';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const mainMenuPages = [
    {
        title: 'Inicio',
        url: '/',
        active: true
    },
    {
        title: 'Menu',
        url: '/category/'
    }
];

const Header = () => (
    <header className='header'>
        <Logo 
            shouldLink={true}
            logoSrc={logoSrc}
            altLogo={`Logo Itadakimasu!`}
            containerClassName={'header-logo'}
        />
        <NavBar pagesList={mainMenuPages} />
        <CartWidget />
    </header>
);


export default Header;
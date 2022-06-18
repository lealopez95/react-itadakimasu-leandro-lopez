import logo from '../../img/logos/logo_1.png';
import NavBar from '../Nav/NavBar';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget';

const mainMenuPages = [
    {
        title: 'Inicio',
        url: '/',
        active: true
    },
    {
        title: 'Contacto',
        url: '/contact'
    },
    {
        title: 'Menú',
        url: '/menu'
    },
    {
        title: 'Reservar',
        url: '/reservations'
    },
    {
        title: 'Pedir Online',
        url: '/online-order'
    }
];


const Header = () => (
    <header className="header">
        <a href="/" className="header-logo">
            <img src={logo} alt="Logo Itadakimasu!" />
        </a>
        <NavBar pagesList={mainMenuPages} />
        <CartWidget />
    </header>
);


export default Header;
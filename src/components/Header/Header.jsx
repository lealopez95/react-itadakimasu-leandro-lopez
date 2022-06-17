import basket from '../../img/shopping-basket.svg';
import logo from '../../img/logos/logo_1.png';
import NavBar from '../Nav/Nav';
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header-logo">
                <img src={logo} alt="Logo Itadakimasu!" />
            </a>
            <NavBar />
            <button className="header-basket">
                <img src={basket} alt="Canasta de compras" />
            </button>
        </header>
    );
}

export default Header;
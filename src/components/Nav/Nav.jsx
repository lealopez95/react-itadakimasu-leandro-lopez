import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a className="nav-list-item-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-list-item-link" href="pages/contact-us.html">Contacto</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-list-item-link" href="pages/menu.html">Men&uacute;</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-list-item-link" href="pages/reservations.html">Reservar</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-list-item-link" href="pages/online-order.html">Pedir Online</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

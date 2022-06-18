import LinkList from '../LinkList/LinkList';
import './Nav.css';

const NavBar = ( { pagesList } ) => {
    return (
        <nav className="nav">
            <LinkList itemsList={pagesList} />
        </nav>
    );
}

export default NavBar;

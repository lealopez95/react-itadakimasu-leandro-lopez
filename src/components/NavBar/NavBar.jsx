import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = ( { pagesList } ) => {
    console.log("pagesList", pagesList)
    return (
        <nav className='nav'>
            <ul className='link-list'>
            {
                pagesList.map((item, index) => (
                    <li key={index} className='link-list-item'>
                        <NavLink className={'link-list-item-link'} aria-current='page' to={item.url}>{item.title}</NavLink>
                    </li>
                ))
            }
            </ul>
        </nav>
    );
}

export default NavBar;

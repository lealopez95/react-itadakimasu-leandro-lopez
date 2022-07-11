import React from "react";
import './CategoryFilters.css';
import { Link } from 'react-router-dom';


const CategoryFilters = ({categories}) => {
    return (
        <div className='filter-wrapper'>
            <ul className='filter-list'>
                <li className='filter-list-item'><Link to={''}>Todas</Link></li>
                {categories.map( category => <li><Link to={category.name}>{category.name}</Link></li> )}
            </ul>
        </div>
    );
}

export default CategoryFilters;
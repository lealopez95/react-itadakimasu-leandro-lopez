import React from 'react';
import './BreadCrumbs.css';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({breadcrumbsList = []}) => {
    return (
        <ul className='Breadcrumbs-wrapper' >
            {
                breadcrumbsList.length > 0 
                    && breadcrumbsList.map( (breadcrumb, index) => {
                        return <li key={index} className='Breadcrumbs-item'><Link to={breadcrumb.link}>{breadcrumb.title}</Link></li>
                    }
                )
            }
        </ul>
    )
}

export default BreadCrumbs;
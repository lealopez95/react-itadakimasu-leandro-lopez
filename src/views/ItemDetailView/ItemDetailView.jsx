import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailView = ({ item, stock }) => {

    const getBreadcrumbs = () => {
        return [{
            link: `/category/${item.category}`,
            title: item.category,
        }];
    }

    return (
        <>
        <BreadCrumbs breadcrumbsList={getBreadcrumbs()} />
        <ItemDetail item={item} stock={stock} />
        </>
    )
}

export default ItemDetailView;
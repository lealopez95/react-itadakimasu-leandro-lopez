import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailView = ({ item }) => {

    const getBreadcrumbs = () => {
        return [{
            link: `/category/${item.category}`,
            title: item.category,
        }];
    }

    return (
        <>
        <BreadCrumbs breadcrumbsList={getBreadcrumbs()} />
        <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailView;
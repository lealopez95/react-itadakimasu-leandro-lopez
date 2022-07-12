import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SyncLoader from "react-spinners/SyncLoader"


const HeaderContainer = () => {
    const [ pages, setPages ] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    const getDinamicPages = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(categories => {
                const pages = [{
                    url: '/',
                    title: 'Home'
                }];
                categories.forEach(category => {
                    pages.push({
                        url: `/category/${encodeURIComponent(category)}`,
                        title: category
                    })
                });
                setPages(pages);
                setIsLoading(false);
            })
    }

    useEffect(getDinamicPages, [])

    return isLoading ?
        <SyncLoader 
            cssOverride={{marginTop: "calc(100vh / 2)"}}
            color={"#fd644c"}
            loading={isLoading}
            margin={5}
        /> : <Header pages={pages} />
}

export default HeaderContainer;
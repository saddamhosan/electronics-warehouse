import React from 'react';
import { Helmet } from 'react-helmet-async';
import Brands from '../Brands/Brands';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - E warehouse</title>
            </Helmet>
            <Banner/>
            <Inventory/>
            <Brands/>
            <Subscribe/>
        </div>
    );
};

export default Home;
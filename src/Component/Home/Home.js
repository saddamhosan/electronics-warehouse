import React from 'react';
import Brands from '../Brands/Brands';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Inventory/>
            <Brands/>
            <Subscribe/>
        </div>
    );
};

export default Home;
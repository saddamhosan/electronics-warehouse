import React from 'react';
import notFound from '../../images/notFound.gif';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;
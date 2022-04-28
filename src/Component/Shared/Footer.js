import React from 'react';

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div>
            <p className='text-center my-6'><small>copyright &#169; {year}</small></p>
        </div>
    );
};

export default Footer;
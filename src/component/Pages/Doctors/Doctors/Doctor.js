import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { picture, name, price, description } = doctor;
    return (
        <div className='singal-doctor'>
            <img src={picture} alt="" />
            <h5>Name: {name}</h5>
            <p>Fee: ${price}</p>
            <p><small>{description}</small></p>
            <button>Checkout</button>
        </div>
    );
};

export default Doctor;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { _id, picture, name, price, description } = doctor;
    const navigate = useNavigate();

    const navigateDoctorDetail = _id => {
        navigate(`/doctor/${_id}`)
    }
    return (
        <div className='singal-doctor'>
            <img src={picture} alt="" />
            <h5>{name}</h5>
            <p>Fee: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateDoctorDetail(_id)}>Checkout</button>
        </div>
    );
};

export default Doctor;
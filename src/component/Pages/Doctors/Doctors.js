import React, { useEffect, useState } from 'react';
import Doctor from './Doctors/Doctor';
import './Doctors.css';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data=>setDoctors(data))
    },[])
    return (
        <div id='services' className='container'>
            <h2 className='doctors-title mt-5 text-center mb-0'>My Services</h2>
            <div className='doctors-container'>
            {
                doctors.map(doctor => 
                    <Doctor key={doctor._id}
                    doctor={doctor}>
                </Doctor>)
            }
            </div>
        </div>
    );
};

export default Doctors;
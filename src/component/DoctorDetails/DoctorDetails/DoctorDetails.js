import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const {doctorId}=useParams()
    return (
        <div>
            <h2>Welcome doctor details page {doctorId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-success'>Procced checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default DoctorDetails;
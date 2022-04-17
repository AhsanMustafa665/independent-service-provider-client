import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetails = () => {
    const {doctorId}=useParams()
    return (
        <div>
            <h2>Welcome doctor details page {doctorId}</h2>
        </div>
    );
};

export default DoctorDetails;
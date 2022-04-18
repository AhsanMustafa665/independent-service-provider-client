import React from 'react';
import Oops from '../../Assests/images/404/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <div class='w-25 details'>
                <h5 className='ps-5'>This is not the<br />  web page you<br />  are looking for.</h5>
            </div>
            <div>
            <img style={{width:'70%'}} src={Oops} alt='/' />
            </div>
            
        </div>
    );
};

export default NotFound;
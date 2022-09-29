import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './Calculate.css'
import person from '../../images/person.jpg'
const Calculate = () => {
    return (
        <div>
            <div className='flex justify-center bg-orange-500 w-3/4 mx-auto p-5 rounded-xl mt-3 text-white'>
            <div className="person-image-name flex gap-11">
                <img className='w-16 rounded-lg' src={person} alt="" />
                <div className="info">
                    <h2 className='text-3xl font-semibold'>Robert Henry</h2>
                    <h2 className='text-lg font-medium'><FontAwesomeIcon icon={faLocationDot} className='mr-2'></FontAwesomeIcon>London, UK</h2>
                </div>
            </div>
            </div>
            <div className='body-measure bg-orange-500 flex gap-20 mt-5 p-5 w-3/4 mx-auto justify-center rounded-xl text-white'>
                <div>
                    <h2 className='text-3xl font-semibold'>85<small>kg</small></h2>
                    <p className='font-semibold'>Weight</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>6.5</h2>
                    <p className='font-semibold'>Height</p>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>23<small>yrs</small></h2>
                    <p className='font-semibold'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Calculate;
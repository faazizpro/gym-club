import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <div>
            <div id='header' className='bg-orange-500 h-20 flex gap-5 items-center justify-center'>
                <span className='text-4xl'>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>    
                </span> 
                <h1 className='text-black text-4xl font-bold'>FaazizPRO GYM
                </h1>
            </div>
        </div>
    );
};

export default Header;
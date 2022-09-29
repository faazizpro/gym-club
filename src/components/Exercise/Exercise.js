import React from 'react';
import './Exercise.css';



const Exercise = (props) => {
    // console.log(props.exercise);
    const {name, description, age, time, img} = props.exercise
    return (
        <div className='single-exercise w-60 border-2 border-sky-500 '>
            <img className='w-64 h-36' src={img} alt="" />
        <div className='p-2 h-60'>
            <h2 className='text-2xl font-bold mt-5 underline '>{name}</h2>
            <p className='font-semibold text-gray-800 mt-2'>{description}</p>
            <p className='text-xl mt-2 mb-2 font-bold'><span className='underline '>For Age:</span> {age}</p>
            <p className='text-xl mt-2 mb-2 font-bold'><span className='underline '>Duration:</span> {time} minutes</p>
        </div>
        <div className='flex justify-center mb-3'>
            <button className='bg-blue-700 text-white py-2 px-12 rounded-lg font-bold text-lg'>Add to List</button>
        </div>
        </div>
    );
};

export default Exercise;
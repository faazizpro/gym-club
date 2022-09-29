import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Exercise from '../Exercise/Exercise';
import './GYM.css'


const GYM = () => {

    const [exercises, setExercises] = useState([]);
    useEffect( () => {
        fetch('exercise.json')
        .then(res=> res.json())
        .then(data => setExercises(data))
    } , [])

    return (
        <div className='gym-container'>
            <div className="exercise-container grid grid-cols-3 gap-10 mt-14 ml-14 mb-14">
                {
                    exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    ></Exercise>)
                }
            </div>

            <div className="calculate-container  border-2 border-green-500">
                <Calculate></Calculate>
            </div>
        </div>
    );
};

export default GYM;
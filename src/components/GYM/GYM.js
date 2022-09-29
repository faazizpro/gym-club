import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Exercise from '../Exercise/Exercise';
import './GYM.css'


const GYM = () => {

    const [exercises, setExercises] = useState([]);
    const [time, setNewTime] = useState([]);

    useEffect( () => {
        fetch('exercise.json')
        .then(res=> res.json())
        .then(data => setExercises(data))
    } , [])


    const handleAddToList = (exercise) => {
        console.log(exercise);
        const newTime = [...time, exercise];
        setNewTime(newTime);
    }

    return (
        <div className='gym-container'>
            <div className="exercise-container grid grid-cols-3 gap-10 mt-14 ml-14 mb-14">
                {
                    exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                    handleAddToList={handleAddToList}
                    ></Exercise>)
                }
            </div>

            <div className="calculate-container">
                <h2 className='text-2xl'>Total Time in calculate component</h2>
                <Calculate
                    time={time}
                ></Calculate>
            </div>
        </div>
    );
};

export default GYM;
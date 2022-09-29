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
        <div >
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
            <div className='blog'>
                    <h2 className='text-4xl font-bold text-center mb-5 text-orange-500'>Our Blog Section</h2>
                <div className='w-2/4'>
                    <h2 className='text-3xl font-semibold ml-10'>Q1: How Does React Work</h2>
                    <p className='text-lg font-semibold ml-10 mb-16 text-justify'><span className='text-2xl font-bold'>Ans:</span> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

                    <h2 className='text-3xl font-semibold ml-10'>Q2: What is The Difference Between props and state?</h2>
                    <p className='text-lg font-semibold ml-10 mb-16 text-justify'><span className='text-2xl font-bold'>Ans:</span> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>

                    <h2 className='text-3xl font-semibold ml-10'>Q3: Where useEffects is used except data load?</h2>
                    <p className='text-lg font-semibold ml-10 mb-16 text-justify'><span className='text-2xl font-bold'>Ans:</span> We will learn six usages of useEffect hook to run and clean up a side effect. <br />
                    <li>Side Effect Runs After Every Render</li>
                    <li>Side Effect Runs Only Once After Initial Render</li>
                    <li>Side Effect Runs After State Value Changes</li>
                    <li>Side Effect Runs After Props Value Change</li>
                    <li>Side Effect Runs After Props and State Value Change</li>
                    <li>Side EffectCleanup</li>
                    
                    </p>
                </div>
 
            </div>
        </div>
    );
};

export default GYM;
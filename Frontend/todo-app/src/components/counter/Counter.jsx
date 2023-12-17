
import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';


export default function Counter(){
    const [count, setCount]= useState(0)
    function incrementParentCounterFunction(by){
        setCount(count+ by)
    }
     function decrementParentCounterFunction(by){
        setCount(count- by)
    }
    function resetCounter(){
        setCount(0)

    }
    return(
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by={1} incrementMethod= {incrementParentCounterFunction} decrementMethod ={decrementParentCounterFunction}/>
        <CounterButton by={2} incrementMethod= {incrementParentCounterFunction} decrementMethod ={decrementParentCounterFunction}/>
        <CounterButton incrementMethod= {incrementParentCounterFunction} decrementMethod ={decrementParentCounterFunction}/>
    
        <button className='resetButton' onClick={resetCounter}>Reset</button>
        </>
    )
    
}

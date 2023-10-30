import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { decrement } from './counter';
import { increment } from './counter';


const App = () => {
    const {count} = useSelector(state => state)
    const dispatch = useDispatch();
    return (
        <>
            <div className='background-image'></div>
            <div className='counter'>

            <div className='title'>Counter:{count}</div>
            <button className='inc' onClick={()=>dispatch(increment()) }>Increment</button>
            <button className='dec' onClick={()=>dispatch(decrement()) }>Decrement</button>
            </div>
        </>
    );
}

export default App;

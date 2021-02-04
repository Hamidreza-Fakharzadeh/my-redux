import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
function Counter() {
    const {count, name, family} = useSelector(state => ({
        ...state.countReducer,
        ...state.nameReducer
    }));

    const dispatch = useDispatch();

    function incrementCount() {
        dispatch({type: 'INCREMENT_COUNT'});
    }

    function decrementCount() {
        dispatch({type: 'DECREMENT_COUNT'});
    }

    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <h3>{name}</h3>
            <h3>{family}</h3>
            {/* 
            {movies.map((movie, index) => {
                return (
                    <ul key={index}>
                        <li>{movie}</li>
                    </ul>
                )
                })
            }  */}
            {' '}
            {' '} </div>
    );
}

export default Counter;

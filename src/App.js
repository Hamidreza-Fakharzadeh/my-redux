import React from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import Name from './Name';

function countReducer(
	state = {
		count: 0
	},
	action
) {
	switch (action.type) {
		case 'INCREMENT_COUNT':
			return {
				...state,
				count: state.count + 1
			};
		case 'DECREMENT_COUNT':
			return {
				...state,
				count: state.count - 1
			};
		default:
			return state;
	}
}

function nameReducer(
	state = {
		name: '',
		family: ''
	},
	action
) {
	switch (action.type) {
		case 'INPUT_NAME':
			return {
				...state,
				name: action.payload
			};
		case 'INPUT_FAMILY':
			return {
				...state,
				family: action.payload
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	countReducer,
	nameReducer
});

const INITIAL_STATE = {};
const store = createStore(rootReducer, INITIAL_STATE);

function App() {
	return (
		<Provider store={store}>
			<Counter />
			<Name />
		</Provider>
	);
}

export default App;

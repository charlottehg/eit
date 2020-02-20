import { createStore } from 'redux';
import reducer from './rootReducer';

const initialState = {};

export default () => {
	return createStore(reducer, initialState);
	//applyMiddleware(...middleware)
};

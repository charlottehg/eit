import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

//combine the reducers
const rootReducer = combineReducers({
	auth: authReducer, //update info on the auth prop insite the stsate obj.
	project: projectReducer //update info on the project propertyin
});

export default rootReducer;

import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; //premade reducer for syncing firestore reducer

//combine the reducers
const rootReducer = combineReducers({
	auth: authReducer, //update info on the auth prop insite the stsate obj.
	project: projectReducer, //update info on the project propertyin
	firestore: firestoreReducer //automatically going to sync
});

export default rootReducer;

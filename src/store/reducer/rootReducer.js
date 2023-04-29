import authReducer from './authReducer';
import quoteReducer from './quoteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  quote: quoteReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
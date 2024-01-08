// import { LS_KEY } from 'constants';
import { combineReducers, createStore } from 'redux';
import { contactsReducer, filterReducer } from '../store';
import { devToolsEnhancer } from '@redux-devtools/extension';

// const reducer = (state, action) => {
// else if (action.type === 'SET_CONTACTS') {
//   return {
//     ...state,
//     contacts: [...action.payload],
//   };
// }

//   return state;
// };

// const initialContacts = JSON.parse(localStorage.get(LS_KEY)) || [];

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

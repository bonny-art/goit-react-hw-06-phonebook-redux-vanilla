import { LS_KEY } from 'constants';
import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from './types';

const initialState = {
  contacts: JSON.parse(localStorage.getItem(LS_KEY)) || [],
};

export const contactsReducer = (state = initialState, action) => {
  if (action.type === ADD_CONTACT) {
    return {
      ...state,
      contacts: [action.payload, ...state.contacts],
    };
  } else if (action.type === DELETE_CONTACT) {
    return {
      ...state,
      contacts: state.contacts.filter(c => c.id !== action.payload),
    };
  } else if (action.type === SET_CONTACTS) {
    return {
      ...state,
      contacts: [...action.payload],
    };
  }

  return state;
};

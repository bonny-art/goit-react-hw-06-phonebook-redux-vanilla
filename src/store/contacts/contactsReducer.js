import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
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
  }

  return state;
};

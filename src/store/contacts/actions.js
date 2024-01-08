import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const deleteContactAction = id => {
  return { type: DELETE_CONTACT, payload: id };
};

export const addContactAction = contact => {
  return { type: ADD_CONTACT, payload: contact };
};

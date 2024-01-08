import { CHANGE_FILTER } from './types';

const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  if (action.type === CHANGE_FILTER) {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};

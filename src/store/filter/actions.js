import { CHANGE_FILTER } from './types';

export const changeFilterAction = data => {
  return { type: CHANGE_FILTER, payload: data };
};

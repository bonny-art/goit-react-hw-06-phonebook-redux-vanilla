import React from 'react';

import { FilterSection, FormField, FormInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'store/filter/actions';

export const Filter = () => {
  const filter = useSelector(store => store.filter.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <FilterSection>
      <FormField>
        Search:
        <FormInput
          type="text"
          name="name"
          placeholder="Start printing name here"
          value={filter}
          onChange={changeFilter}
        />
      </FormField>
    </FilterSection>
  );
};

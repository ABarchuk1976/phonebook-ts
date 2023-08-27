import { FC, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filter/slice';
import { useAppDispatch } from '../hooks';

import { FilterLabel, FilterInput } from './Filter.styled';

const Filter: FC = () => {
  const dispatch = useDispatch();

  const handlerFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(evt?.target?.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        title="Filter is case unsensitive."
        onChange={handlerFilterChange}
        required
      />
    </FilterLabel>
  );
};

export default Filter;

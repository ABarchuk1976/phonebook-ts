import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filter/slice';

import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterChange = evt => {
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

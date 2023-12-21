import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'store/Filter/filterSlice';
import { SearchInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <SearchInput
      type="text"
      name="filter"
      placeholder="Search"
      value={filter}
      onChange={showFilteredContacts}
    />
  );
};

import { FieldInput, FieldLabel } from './Filter.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Filter = ({ filter, onFilterChange }) => {
  const filterInputId = nanoid();

  return (
    <div>
      <FieldLabel htmlFor={filterInputId}>Find contacts by name:</FieldLabel>
      <FieldInput
        type="text"
        name="filter"
        value={filter}
        id={filterInputId}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

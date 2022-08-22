import PropTypes from 'prop-types';

export const Filter = ({ filter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={filter} />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

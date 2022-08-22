import PropTypes from 'prop-types';

export const ContactList = visibleContact => {
  const { contact, deleteContact } = visibleContact;
  return (
    <ul>
      {contact.map(({ id, name, number }) => {
        return (
          <li key={id} className="list-contact">
            {name} : {number}
            <button
              type="button"
              onClick={() => deleteContact(id)}
              className="btn-delete"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import ContactItem from './ContactItem';
import { List } from '../Form/Form.styled';

const ContactsList = ({ contacts, deleteButton }) => {
  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={nextId()}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteButton={deleteButton}
            ></ContactItem>
          );
        })}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
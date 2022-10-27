import { Button, Item } from './Contact.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { Box } from '../Box';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'icons/delete-icon.svg';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <Box display="flex" alignItems="center">
        <BsFillPersonFill />
        {`${name}: ${number}`}
      </Box>
      <Button
        type="button"
        onClick={() => onDeleteContact(id)}
        aria-label="Delete contact"
      >
        <DeleteIcon width="20" height="20" fill="white"></DeleteIcon>
      </Button>
    </Item>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};

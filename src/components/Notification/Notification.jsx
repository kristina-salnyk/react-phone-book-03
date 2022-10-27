import { Image, Message } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message, image = null }) => {
  return (
    <>
      {image ? (
        <Image src={image} alt={message} width="350" />
      ) : (
        <Message>{message}</Message>
      )}
    </>
  );
};

export default Notification;

Notification.propTypes = {
  image: PropTypes.string,
  message: PropTypes.string.isRequired,
};

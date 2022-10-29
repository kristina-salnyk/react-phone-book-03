import { FieldLabel, Field, FieldInput, Button } from './ContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (onSubmit({ name, number })) handleFormReset();
  };

  const handleFormReset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form onSubmit={handleFormSubmit}>
      <Field>
        <FieldInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
        />
        <FieldLabel htmlFor={nameInputId}>Name</FieldLabel>
      </Field>
      <Field>
        <FieldInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
          id={numberInputId}
        />
        <FieldLabel htmlFor={numberInputId}>Number</FieldLabel>
      </Field>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { FieldLabel, Field, FieldInput, Button } from './ContactForm.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.props.onSubmit(this.state)) this.handleFormReset();
  };

  handleFormReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Field>
          <FieldInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
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
            value={this.state.number}
            onChange={this.handleInputChange}
          />
          <FieldLabel htmlFor={numberInputId}>Number</FieldLabel>
        </Field>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

export default ContactForm;

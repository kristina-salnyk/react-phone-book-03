import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { Component } from 'react';
import { Title } from './App.styled';
import { nanoid } from 'nanoid';
import Notification from './Notification';
import noResultsImg from '../img/no-result.png';
import { save, load } from '../utils/local-storage';
import { LOCAL_STORAGE_KEYS } from '../constants';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = load(LOCAL_STORAGE_KEYS.contacts);
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      save(LOCAL_STORAGE_KEYS.contacts, this.state.contacts);
    }
  }

  addContact = ({ name, number }) => {
    if (this.isExistContact(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  isExistContact = name => {
    return this.state.contacts.some(item => item.name === name);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box
        p="30px 40px"
        bg="white"
        width="450px"
        m="10px auto"
        display="grid"
        gridGap="30px"
        boxShadow={'var(--primary-box-shadow)'}
      >
        <Box display="grid" gridGap="10px">
          <Title as="h1">Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </Box>

        <Box display="grid" gridGap="10px">
          <Title>Contacts</Title>
          <Filter
            filter={this.state.filter}
            onFilterChange={this.changeFilter}
          />
          {visibleContacts.length > 0 ? (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification message="There is no contacts" image={noResultsImg} />
          )}
        </Box>
      </Box>
    );
  }
}

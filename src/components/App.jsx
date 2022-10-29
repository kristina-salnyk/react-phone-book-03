import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { Title } from './App.styled';
import Notification from './Notification';
import noResultsImg from '../img/no-result.png';
import useContacts from '../hooks/useContacts';
import useFilter from '../hooks/useFilter';

export const App = () => {
  const [contacts, addContact, deleteContact] = useContacts([]);
  const [filter, changeFilter] = useFilter('');

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

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
        <ContactForm onSubmit={addContact} />
      </Box>

      <Box display="grid" gridGap="10px">
        <Title>Contacts</Title>
        <Filter filter={filter} onFilterChange={changeFilter} />
        {visibleContacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Notification message="There is no contacts" image={noResultsImg} />
        )}
      </Box>
    </Box>
  );
};

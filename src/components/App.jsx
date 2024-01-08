import React, { useEffect } from 'react';

import { PhoneInputForm, ContactsList, Filter } from 'components';
import { Section, Header, Title } from './Section/Section.styled';
import { useSelector } from 'react-redux';
import { LS_KEY } from 'constants';
// import { setContactsAction } from 'store/contacts/actions';

// const LS_KEY = 'phone_contacts';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.get(LS_KEY)) || [];
  // });
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  // const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem(LS_KEY));

  //   if (storedContacts.length) {
  //     dispatch(setContactsAction(storedContacts));
  //   }
  // }, [dispatch]);

  return (
    <Section>
      <Header>Phonebook</Header>
      <PhoneInputForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </Section>
  );
};

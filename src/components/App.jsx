import React, { useEffect } from 'react';

import { PhoneInputForm, ContactsList, Filter } from 'components';
import { Section, Header, Title } from './Section/Section.styled';
import { useSelector } from 'react-redux';
import { LS_KEY } from 'constants';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

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

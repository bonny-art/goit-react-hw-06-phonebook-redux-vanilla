import React, { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import { ContactForm, ContactsList, Filter } from 'components';
import { ContainerStyled, SectionStyled, TitleStyled } from './AppStyled';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (contacts) setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.target.value.trim().toLowerCase());
  };

  const addContact = (name, number) => {
    const isPresent = contacts.find(contact => contact.name === name);

    if (isPresent) {
      alert(`${name} is already in the phonebook`);
      return;
    }

    setContacts(c => [...c, { name, id: nanoid(), number }]);
  };

  const deleteContact = id => {
    const leftContacts = contacts.filter(contact => contact.id !== id);

    setContacts(leftContacts);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <SectionStyled>
      <ContainerStyled>
        <TitleStyled>Phonebook</TitleStyled>
        <ContactForm onSubmit={addContact} />
        <TitleStyled>Contacts</TitleStyled>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </ContainerStyled>
    </SectionStyled>
  );
};

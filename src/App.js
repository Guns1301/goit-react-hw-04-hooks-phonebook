import React, { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";
import { v4 as uuid } from "uuid";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
  }

  const addContact = (name, number) => {
    const item = {
      id: uuid(),
      name,
      number,
    };

    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );

    if (name === "" || number === "") {
      alert("Please enter all fields!");
      return;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts((contacts) => [item, ...contacts]);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <Section title="Phonebook">
        <Form contacts={contacts} onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

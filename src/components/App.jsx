import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import { ContactForm } from './ContactForm/contactform';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const stateContacts = [...this.state.contacts];

    const busyName = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(data.name.toLowerCase());
    });

    if (busyName.length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState({
      contacts: [
        ...stateContacts,
        { name: data.name, id: nanoid(5), number: data.number },
      ],
    });
  };

  deleteContact = id => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contactLocal')),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contactLocal', JSON.stringify(this.state.contacts));
    }
  }

  render = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(filters => {
      console.log(normalizeFilter);
      return filters.name.toLowerCase().includes(normalizeFilter);
    });
    return (
      <div className="container">
        <div className="form-container">
          <h1>Phonebook</h1>
          <ContactForm submit={this.addContact} />
        </div>
        <h2>Contacts</h2>
        <Filter filter={this.filterInput} />
        <ContactList
          contact={visibleContact}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  };
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputCorrect = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    console.log(e);
    e.preventDefault();

    this.props.submit(this.state);
    this.reset(e);
  };

  reset = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  render = () => {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <label>
          <p> Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputCorrect}
            required
          />
        </label>
        <label>
          <p> Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.inputCorrect}
            required
          />
        </label>
        <br />
        <button type="submit" className="btn-form">
          Submit
        </button>
      </form>
    );
  };
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

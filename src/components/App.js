import { Component } from "react";
import nextId from "react-id-generator";

import ContactsList from "./Contacts/ContactsList";
import { ContactForm } from "./Form/ContactForm";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const getName = localStorage.getItem("name");
    const parcedName = JSON.parse(getName);
    if (parcedName) {
      this.setState({
        contacts: parcedName,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("name", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ number, name }) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [
            ...prevState.contacts,
            { id: nextId(), name: name, number: number },
          ],
        };
      });
    }
  };

  filterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const filterName = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName)
    );
  };

  render() {
    const { filter } = this.state;
    const filtered = this.getFilteredContacts();

    return (
      <div
        style={{
          width: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px dashed orange",
          backgroundColor: "#fffcf9",
        }}
      >
        <h1 style={{ textAlign: "center" }}>PhoneBook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 style={{ textAlign: "center" }}>Contacts</h2>

        <Filter value={filter} onChange={this.filterChange} />

        <ContactsList deleteButton={this.deleteContact} contacts={filtered} />
      </div>
    );
  }
}

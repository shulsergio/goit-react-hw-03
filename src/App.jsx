import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
const userData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
function App() {
  const [itemsContact, setItemsContact] = useState(() => {
    const lsItems = window.localStorage.getItem("contact");
    console.log('savedItems-', lsItems);
    console.log('JSON.parse(savedItems)-', JSON.parse(lsItems));
    if (lsItems !== null) {
      return JSON.parse(lsItems)
    } else {
      return userData;
    }
  });
    useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(itemsContact));
    }, [itemsContact]);
  
  const [filter, setFilter] = useState('');
  const addContact = (newContact) => {
    setItemsContact((prevContacts) => [...prevContacts, newContact]);
  }
  const deleteContact = (contactId) => {
    console.log(contactId);
    setItemsContact(prevContact => {
      return prevContact.filter(item => item.id !== contactId);
    })
  };
  
  const visibleContacts = itemsContact.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));



  return (
    <>

      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact}/> 
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />

    </>
  )
}

export default App;

import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
    return (
        <>
            <ul>
        {contacts.map(contact => (
    <Contact key={contact.id} item={contact} onDelete={onDelete} />
        ))}
      </ul>
        </>
    )
};
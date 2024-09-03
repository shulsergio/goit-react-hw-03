import css  from "./Contact.module.css";
export default function Contact({ item, onDelete }) {
    return (
      <div className={css.contactAll}>
            <div className={css.contactsBox}>
       <li>
            {item.name}
        </li>
        <li>
            {item.number}
                </li>     </div>
        <button className={css.btnDel} onClick={() => onDelete(item.id)}>Delete</button></div>
  );
}
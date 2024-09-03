import css from "./SearchBox.module.css";
export default function SearchBox({filter, onFilter}) {
    return (
        <div>
            <p className={css.label}>Find contact by name</p>
            <input type="text" value={filter} onChange={e=>onFilter(e.target.value)} />
        </div>
    )
}
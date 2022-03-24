import styles from "./TodoItem.module.css";

export default function TodoItem({ item, dispatch }) {
    const handleChange = () => {
        item.checked = !item.checked;
        dispatch({ type: "itemChange" });
    };

    const remove = () => {
        dispatch({ type: "removeItem", payload: item.id });
    };

    return (
        <div className={styles.TodoItem}>
            <label>
                <input
                    checked={item.checked ? "checked" : ""}
                    className={styles.TodoItemInput}
                    type="checkbox"
                    onChange={handleChange}
                />
                <p className={styles.TodoItemTitle}>{item.text}</p>
            </label>
            <div onClick={remove} className={styles.TodoItemButton}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    );
}

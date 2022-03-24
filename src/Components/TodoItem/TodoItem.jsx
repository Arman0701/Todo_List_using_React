import styles from "./TodoItem.module.css";

export default function TodoItem({item, todos, setTodos}) {
    const handleChange = () => {
        item.checked = ! item.checked;
        setTodos([...todos]);
    }

    const remove = () => {
        const currentItemID = item.id;
        setTodos(todos.filter(item => item.id !== currentItemID))
    }

    return (
        <div className={styles.TodoItem}>
            <label>
                <input checked={item.checked ? 'checked' : ''} className={styles.TodoItemInput} type="checkbox" onChange={handleChange} />
                <p className={styles.TodoItemTitle}>{item.text}</p>
            </label>
            <div onClick={remove} className={styles.TodoItemButton}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    );
}

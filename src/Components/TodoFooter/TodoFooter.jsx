import { useState, useEffect } from "react";
import styles from "./TodoFooter.module.scss";

export default function TodoFooter({ todos, dispatch }) {
    const [checkedTasks, setCheckedTasks] = useState(0);
    useEffect(() => {
        setCheckedTasks(todos.filter((item) => item.checked).length);
    }, [todos]);

    const removeAll = () => {
        dispatch({ type: "removeAll" });
    };

    const removeCompleted = () => {
        dispatch({ type: "removeCompleted" });
    };

    return (
        <div className={styles.footer}>
            <div className={styles.status}>
                Status {checkedTasks} / {todos.length}
            </div>
            <div className={styles.buttons}>
                <div className={styles.button} onClick={removeCompleted}>
                    Clear Complited
                </div>
                <div className={styles.button} onClick={removeAll}>
                    Clear All
                </div>
            </div>
        </div>
    );
}

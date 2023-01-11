import styles from "./TodoInput.module.scss";
import { useRef } from "react";

export default function TodoInput({ dispatch }) {
    const inputRef = useRef(null);
    const addTask = () => {
        if (inputRef.current.value) {
            dispatch({ type: "addTask", payload: inputRef.current.value });
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") addTask();
    };

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                type="text"
                autoFocus
                placeholder="Type here ..."
                className={styles.input}
                onKeyDown={handleKeyPress}
            />
            <div onClick={addTask} className={styles.button}>
                <i className="fa fa-plus"></i> Add
            </div>
        </div>
    );
}

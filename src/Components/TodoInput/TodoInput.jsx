import styles from "./TodoInput.module.css";
import { useRef } from "react";
import { v1 as getID } from 'uuid'

export default function TodoInput({ set, todos }) {
	const inputRef = useRef(null);
    const addTask = () => {
        if (inputRef.current.value){
            set([...todos, {
                id: getID(),
                text: inputRef.current.value,
                checked: false,
            }])
        }
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') addTask();
    }

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
            <div onClick={addTask} className={styles.button} >
                <i className="fa fa-plus"></i> Add
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoItem from "./Components/TodoItem/TodoItem";
import TodoFooter from "./Components/TodoFooter/TodoFooter";

export default function App() {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

	useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
		setTodos(todos)
	}, [todos]); 

    return (
        <div className="AppContainer">
            <div className="todoContainer">
                <TodoInput set={setTodos} todos={todos} />
                <div className="itemsContainer">
                    {todos.length > 0 ? (
                        todos.map((item) => {
                            return <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />;
                        })
                    ) : (
                        <h4 className="emptyTasks">No tasks yet</h4>
                    )}
                </div>
				<TodoFooter set={setTodos} todos={todos} />
            </div>
        </div>
    );
}

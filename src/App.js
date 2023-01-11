import { useEffect, useReducer } from "react";
import "./App.scss";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoItem from "./Components/TodoItem/TodoItem";
import TodoFooter from "./Components/TodoFooter/TodoFooter";
import { v1 as getID } from "uuid";

function reducer(state, action) {
    switch (action.type) {
        case "removeAll":
            return [];
        case "removeCompleted":
            return [...state.filter((item) => !item.checked)];
        case "removeItem":
            return state.filter((item) => item.id !== action.payload);
        case "itemChange":
            return [...state];
        case "addTask":
            return [
                ...state,
                {
                    id: getID(),
                    text: action.payload,
                    checked: false,
                },
            ];
    }
}

export default function App() {
    const [todos, dispatch] = useReducer(
        reducer,
        JSON.parse(localStorage.getItem("todos")) || []
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="AppContainer">
            <div className="todoContainer">
                <TodoInput dispatch={dispatch} />
                <div className="itemsContainer">
                    {todos.length > 0 ? (
                        todos.map((item) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    dispatch={dispatch}
                                />
                            );
                        })
                    ) : (
                        <h4 className="emptyTasks">No tasks yet</h4>
                    )}
                </div>
                <TodoFooter dispatch={dispatch} todos={todos} />
            </div>
        </div>
    );
}

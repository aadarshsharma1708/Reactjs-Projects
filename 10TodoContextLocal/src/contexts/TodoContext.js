import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    toggleComplete : (id) => {},
});

export const useTodo = () => {  // Custom hook to use the TodoContext
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider; // Exporting the Provider component for use in the app

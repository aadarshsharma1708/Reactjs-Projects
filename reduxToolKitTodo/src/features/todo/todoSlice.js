import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Learn Redux-ToolKit' }], // Array to hold todo items
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  // Function to add a todo item
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),  // Generate a unique ID for the new todo item
                text: action.payload,  // Get the text from the action payload
            }
            state.todos.push(todo); // Add the new todo item to the state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)  // Function to remove a todo item by filtering out the one with the matching ID
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions; // Exporting the actions for use in components
export default todoSlice.reducer; // Exporting the reducer to be used in the store configuration
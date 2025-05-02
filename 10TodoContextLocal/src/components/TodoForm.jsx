import React,{useState} from "react";
import { useTodo } from "../contexts/TodoContext";
function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo(); // Using the custom hook to access the context
    const add = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (!todo) return; // If the input is empty, do nothing
        addTodo({ todo, completed: false }); // Call the addTodo function from context with the new todo
        setTodo(""); // Clear the input field after adding the todo
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)} // Update the todo state on input change
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
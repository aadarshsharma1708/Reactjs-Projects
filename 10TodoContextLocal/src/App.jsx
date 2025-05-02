import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import { TodoForm } from './components';
import { TodoItems } from './components'

function App() {
  const [todos, setTodos] = useState([]);
  // define the functionality of functions to manage todos
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev]) // Add a new todo to the list
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))) // Update an existing todo
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)) // Delete a todo from the list
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))) // Toggle the completed status of a todo
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) // Get todos from local storage and parse it
    // Check if there are any todos in local storage and set them to state
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, []) // Empty dependency array to run only once on mount

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) // Store todos in local storage
    // Whenever todos change, update local storage
    // This effect runs whenever the todos state changes
    // It saves the current todos to local storage
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
      {/* TodoProvider is used to provide the context to the child components */}
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'>
                <TodoItems todo={todo}/>
                {/* Pass the todo object to TodoItems component */}
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

//Creating a Redux store using Redux Toolkit

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; // Importing the todo slice reducer
export const store = configureStore({
    

    reducer: todoReducer   // Setting the todo slice reducer as the main reducer for the store
});
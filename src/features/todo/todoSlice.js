import { createSlice, nanoid } from '@reduxjs/toolkit'

// Initial state for the todoSlice, containing an array of todo objects
const initialState = {
  todos: [{ id: nanoid(), text: 'Hello' }],
}

// Create the todoSlice using createSlice from Redux Toolkit
export const todoSlice = createSlice({
  name: 'todo', // Name of the slice
  initialState: initialState, // Initial state for the slice
  reducers: {
    // Action creator for adding a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique id for the new todo
        text: action.payload, // Get the text for the new todo from the action's payload
        completed: false, // Set the completed status of the new todo to false
      }
      state.todos.push(todo) // Add the new todo to the todos array in the state
    },
    // Action creator for deleting a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload) // Filter out the todo with the matching id from the todos array in the state
    },
    // Action creator for updating a todo
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo // If the todo's id matches the id in the action's payload, replace the todo with the updated todo from the action's payload, otherwise keep the todo the same
      )
    },
  },
})

// Export the actions and reducer for the todoSlice
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
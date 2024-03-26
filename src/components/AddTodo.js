import React, { useState } from 'react' // Importing React and useState hook
// import { useDispatch } from 'react-redux' // Importing useDispatch hook from react-redux
import { addTodo } from '../features/todo/todoSlice' // Importing addTodo action from todoSlice

const AddTodo = () => {
  // const dispatch = useDispatch()
// 
  // Declaring text state and setText updater function using useState hook
  const [text, setText] = useState('')

  // handleSubmit function to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault() 
    // dispatch(addTodo(text)) 
    setText('') 
  }

  // JSX for the AddTodo component
  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      {/* Text input field for adding a new todo */}
      <input
        type="text"
        value={text}
        placeholder="Add Todo"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:right-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setText(e.target.value)}
      />
      {/* Button to submit the form and add the new todo */}
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Add
      </button>
    </form>
  )
}

export default AddTodo
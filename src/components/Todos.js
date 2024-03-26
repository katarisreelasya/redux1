import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos);

  return (
    <>
      <div>Todo</div>
      {todos.map((todo) =>(
        <ul className="list-none">
          {todos.map((todo) =>(
            <li className='mt-4 flex justify-between items-center bg-zinc-800 rounded px-4 py-2'
              key={todo.id}>
              <div>{todo.text}</div>
              <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
              </button>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0  0 24 24' stroke='currentColor'strokeWidth={1.5} className='w-6 h-6'>
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1
                strokeWidth={2}
                d='M6 a6  /></svg>
              </li>
          )}
        <div key={todo.id}>{todo.text}</div>
        </ul>
      ))}
    </>
  )
}

export default Todos
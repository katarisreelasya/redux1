import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const To = () => {
    const tod = useSelector(state => state.todoReducer.tod)
    
    const dispatch = useDispatch()

    return (
        <div>
            <ul className="list-none justify-center gap-4">
                {tod?.map((todo) => (
                    <li className='text-white  mt-4 flex justify-between bg-zinc-800 rounded px-6 py-3  gap-4' key={todo.id}>
                        <div>{todo.text}</div>
                        <button onClick={() =>dispatch(removeTodo(todo.id))}
                        className="text-white float-right bg-red-500 border-0  px-4 focus:outline-none hover:bg-red-600 rounded text-md">Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default To

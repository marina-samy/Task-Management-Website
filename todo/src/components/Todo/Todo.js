import React, { useState} from 'react';
import { BsXLg} from "react-icons/bs";
import { BsFillPencilFill} from "react-icons/bs";
import { BsFillCircleFill} from "react-icons/bs";
import { BsFillCheckCircleFill} from "react-icons/bs";
import { BsThreeDotsVertical} from "react-icons/bs";
import './Todo.css'
import { deleteTodo, toggleTodo, updateTodo } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import DropDirection from '../DropDirection';


export default function Todo({todo}) {


    const dispatch = useDispatch();

    const [editting, setEditing]= useState(false);
    const [text, setText]= useState(todo.data);
    const [selectedDate, setSelectedDate] = useState(null);

    const onFormSubmit = (e) => {
      e.preventDefault();

      setEditing(prevState => !prevState)

      dispatch(updateTodo(todo._id, text))
    }

  return (
    <li className='task p-3 mt-4 me-4 row' 
     role='button'
    >
    <span className='col-9 text-dark' 
    style={{display : editting ? 'none' : '', textDecoration: todo.done ? 'line-through' : ''}}
    >
     
    <BsFillCircleFill className='me-2 fs-5 mb-1'
    onClick={() => dispatch(toggleTodo(todo._id))}
    style={{
      display : todo.done ? 'none' : '',
        color: todo.done ? '' : '#fff'
    }}
    />
    <BsFillCheckCircleFill className='me-2 mb-1 fs-5'
    onClick={() => dispatch(toggleTodo(todo._id))}
    style={{
      display : todo.done ? 'inline' : 'none',
        color: todo.done ? '#955dc0' : ''
    }}
    />
  
    
    {todo.data} 

    <span className='fw-light ms-2' style={{fontSize: 13}}>{selectedDate && selectedDate.toLocaleDateString()}</span>

    </span>


    <form className='col-9' style={{display : editting ? 'inline' : 'none'}}
    onSubmit={onFormSubmit}
    >
    <input
    className='edit'
    type='text'
    value={text}
    onChange={(e) => setText(e.target.value)}
    />
    
    </form>

    
    <div className='col-3 d-flex justify-content-end align-items-center'>
    <span className='me-3 icon' role='button' onClick={() => setEditing(prevState => !prevState)}><BsFillPencilFill /></span>

    <span className='me-3 icon text-danger' role='button' onClick={() => dispatch(deleteTodo(todo._id))}><BsXLg /></span>

    <DropDirection setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

    </div>

    </li>
  )
}

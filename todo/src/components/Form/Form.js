import React, { useState, useEffect } from 'react'
import "./Form.css"
import { useDispatch} from 'react-redux';
import { addNewCatTodo } from '../../store/actions';
import { BsChatSquareQuoteFill} from "react-icons/bs";
import { BsXLg} from "react-icons/bs";
import data from "../../quotes.json"

export default function Form({ selectedCategory }) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState(selectedCategory);
  const [quote, setQuote] = useState('');
  const [quoteNotification, SetQuoteNotification] = useState(false)


  
  

  const getQuote = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuote(data[randomNum])
   }

   const getNotification = () => {
    SetQuoteNotification(!quoteNotification)
   }

   useEffect(() => {
    getQuote();
    }, [])

  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(addNewCatTodo(text, category));
      setText('');
    } catch (error) {
      console.log('Error while adding new todo:', error);
    }
  };
 const onFormChange = (e) => {
  setText(e.target.value)
 }

 useEffect(() => {
  if (selectedCategory) {
    setCategory(selectedCategory); // Update the category state when selectedCategory prop changes
  }else{
    setCategory("today");
  }
}, [selectedCategory]);


  return (
    <div className='mx-auto p-3' style={{"width" : "60%"}}>


    <div className='bg' style={{"display": quoteNotification ? "flex" : "none"}}>

    <div className='quote'>
    <h1 className='text-white fs-5 fw-bold text-center'>Quote Of The Day</h1>
    <hr />
    <BsXLg className='fs-4 exit' onClick={getNotification} role='button'/>
    <div className='content text-center'>
    <p>{quote.text}</p>
    <p>{quote.author}</p>
    <button onClick={getQuote}>Quote</button>
    </div>
  </div>
  </div>


  <div className='head '>

    <div className='d-flex justify-content-between my-3'>
    <h2 className='fs-1 fw-bold text-white'>{category}</h2>
    <BsChatSquareQuoteFill className='ic fs-3 mt-3 me-4 text-white' onClick={() => {getQuote(); getNotification();}} role='button'/>
    </div>

    <form className='form p-4 w-100 mx-auto mt-4' onSubmit={onFormSubmit}>
    <input
    placeholder='Enter Your Todo'
    className='input p-2 ms-2'
    onChange={onFormChange}
    value={text}
    />
    <button className='ms-3' onClick={onFormSubmit}>Add Task</button>
    <button className='ms-3'>Remove All</button>
    </form>
    </div>
    </div>
  )
}

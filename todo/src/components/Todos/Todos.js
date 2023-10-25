import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodoByCat } from '../../store/actions/index';
import Todo from '../Todo/Todo';

export default function Todos({ selectedCategory }) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getTodoByCat(selectedCategory));
    }else{
      dispatch(getTodoByCat("today"))
    }
  }, [dispatch, selectedCategory]);

  return (
    <div className='mx-auto' style={{ width: '60%' }}>
      <ul style={{ listStyle: 'none' }}>
        {todos.map((todo, index) => (
          <Todo key={todo._id} todo={todo} index={index} />
        ))}
      </ul>
    </div>
  );
}
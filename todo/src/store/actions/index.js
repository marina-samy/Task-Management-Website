import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, GETCAT_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, ADDNEWCAT_TODO } from './type';

const API_URL = 'http://localhost:8800'

export const addNewTodo = (data) => async(dispatch) => {
    try{
       const res = await axios.post(`${API_URL}/todos`, {data});
       dispatch({type: ADDNEW_TODO , payload: res.data})
    }
    catch(error){
        console.log("error while calling", error.message);
    }
    
}


export const addNewCatTodo = (data, category) => async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/todos/${category}`, { data });
      dispatch({ type: ADDNEWCAT_TODO, payload: res.data });
    } catch (error) {
      console.log('error while calling', error.message);
    }
  };


export const getAllTodos = (data) => async(dispatch) => {
    try{
       const res = await axios.get(`${API_URL}/todos`, {data});
       dispatch({type: GETALL_TODO , payload: res.data})
    }
    catch(error){
        console.log("error while calling get", error.message);
    }   
}



export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}/toggle`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getTodo API ', error.message);
    }
}


export const getTodoByCat = (cat) => async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/todos/${cat}`);
      dispatch({ type: GETCAT_TODO, payload: res.data });
    } catch (error) {
      console.log('Error while calling get', error.message);
    }
  };

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}


export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}
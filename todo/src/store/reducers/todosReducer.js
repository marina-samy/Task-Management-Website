import * as actionTypes from '../actions/type';



export const todosReducer = (state = [], action) => {

    switch(action.type){
        case actionTypes.ADDNEW_TODO:
        return [action.payload, ...state]

        case actionTypes.ADDNEWCAT_TODO:
        const { cat, data, splitWord } = action.payload;
        const newTodos = data.split(splitWord).map(item => ({ cat, data: item.trim() }));
        return [...state, ...newTodos];

        case actionTypes.GETALL_TODO:
        return action.payload

        case actionTypes.GETCAT_TODO:
        return action.payload;


        case actionTypes.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);


        default:
        return state;
    }
}
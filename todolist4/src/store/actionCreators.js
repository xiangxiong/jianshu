import { CHANGE_ITEM_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

export const changeItemValue = (value)=>{
    return {
        type: CHANGE_ITEM_VALUE,
        value:value
    };
};

export const addTodoItem = () =>{
    return {
        type:ADD_TODO_ITEM
    }
};

export const deleteTodoItem = (index) =>{
    return {
        type:DELETE_TODO_ITEM,
        index:index
    }
};
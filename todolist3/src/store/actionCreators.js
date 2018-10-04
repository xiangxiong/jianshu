import {CHANGE_INPUT_VALUE,INIT_TODO_LIST} from './actionTypes';
export const changeInputValue = (value) =>{
    return {
        type:CHANGE_INPUT_VALUE,
        value:value
    }
}

export const initTodoList = (data)=>{
    return {
        type:INIT_TODO_LIST,
        list:data
    }
}

export const getTodoList = ()=>{
    return (dispatch)=>{
        const data = ['1','2'];
        const action = {
            type:INIT_TODO_LIST,
            list:data
        };
        dispatch(action);
    }
}


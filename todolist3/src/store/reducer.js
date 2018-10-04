import {CHANGE_INPUT_VALUE,INIT_TODO_LIST} from './actionTypes';

const defaultState = {
    inputValue:'ddd',
    list:[]
};

export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }
    if(action.type === INIT_TODO_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}

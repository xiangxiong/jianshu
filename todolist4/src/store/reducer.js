import { CHANGE_ITEM_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue:'ddd',
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type === CHANGE_ITEM_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index);
        return newState;
    }
    return state;
}
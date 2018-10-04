import {CHANGE_INPUT_VALUE,PUSH_CHANGE_LIST,DELETE_LIST_ITEM} from './actionTypes';

const defaultState = {
    inputValue:'',
    list:[]
};

export default (state=defaultState,action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === PUSH_CHANGE_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        return newState;
    }
    if(action.type === DELETE_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}
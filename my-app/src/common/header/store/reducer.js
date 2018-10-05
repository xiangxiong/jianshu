import * as actionTypes from './constants';

const defaultState = {
    focused:false
};

export default (state=defaultState,action)=>{
    if(action.type === actionTypes.USER_REGISTER_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.focused;
        return newState;
    }
    return state;
}
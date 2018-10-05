const defaultState = {
    focused:false
};

export default (state=defaultState,action)=>{
    if(action.type === 'user_register_action'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.focused;
        return newState;
    }
    return state;
}
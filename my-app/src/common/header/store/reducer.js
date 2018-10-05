import * as actionTypes from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false
});

export default (state=defaultState,action)=>{
    if(action.type === actionTypes.USER_REGISTER_ACTION){
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = action.focused;
        // return newState;
        // immutable 对象的set方法,会结合之前 immutable 对象的值.
        // 和设置的值, 返回一个全新的对象.
        return state.set('focused',true);
    }
    return state;
}
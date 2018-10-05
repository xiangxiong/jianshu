import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    if(action.type === actionTypes.USER_REGISTER_ACTION){
        return state.set('focused',action.focused);
    }
    if(action.type === constants.CHANGE_LIST){
        return state.set('list',action.data);
    }
    return state;
}
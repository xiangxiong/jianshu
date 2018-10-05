import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const seachFoucus = (value)=>{
    return {
        type: constants.USER_REGISTER_ACTION,
        focused:value
    }
}

export const changeList = (data)=> ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () =>{
    return (dispatch)=>{
        axios.get('/api/headerList.json')
        .then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        })
        .catch((res)=>{
            console.log('error');
        });
    }
}
import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList = (data)=> ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length)  / 10
})

export const seachFoucus = (value)=>{
    return {
        type: constants.USER_REGISTER_ACTION,
        focused:value
    }
}

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

export const mouseEntry = () => {
    return {
        type:constants.MOUSE_ENTRY
    }
}

export const mouseLeave = () => {
    return {
        type:constants.MOUSE_LEAVE
    }
}

export const changePage = (page) =>{
    return {
        type:constants.CHANGE_PAGE,
        page
    }
}
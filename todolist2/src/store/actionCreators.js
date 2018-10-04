import {CHANGE_INPUT_VALUE,GET_INIT_LIST,PUSH_CHANGE_LIST,DELETE_LIST_ITEM,INIT_LIST_ACTION} from './actionTypes';

export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () =>({
    type:PUSH_CHANGE_LIST
});

export const getDeleteItemAction = (index) =>({
    type:DELETE_LIST_ITEM,
    index
});

export const initListAction = (data) =>({
    type:INIT_LIST_ACTION,
    data
});

export const getInitList = ()=>({
    type:GET_INIT_LIST
});

// reudx-thunk.
export const getTodoList = ()=>{
    return (dispatch)=>{
           // axios.get('/api/list.json')
        // .then(()=>{
        //     console.log('sucess');
        // })
          // console.log(data);
        // const action = initListAction(data);
        // store.dispatch(action);
        const data = ["a","b","c"];
        const action = initListAction(data);
        dispatch(action);
    }
}


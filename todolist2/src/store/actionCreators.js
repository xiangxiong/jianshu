import {CHANGE_INPUT_VALUE,PUSH_CHANGE_LIST,DELETE_LIST_ITEM} from './actionTypes';

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
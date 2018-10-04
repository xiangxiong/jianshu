import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST } from './actionTypes';
import {initListAction} from './actionCreators';

// gennerator 函数.
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getInitList(){
    try{
        // 异步的逻辑
        const data = ["a","b","c"];
        const action = initListAction(data);
        yield put(action);
    }catch(e){
        console.log('network request failed');
    }
    // console.log(action);
    // store.dispatch(action);
//    console.log('abc');
}

// 一定要导出gennerator 函数.
export default mySaga;
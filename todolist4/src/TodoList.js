import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {changeItemValue,addTodoItem,deleteTodoItem} from './store/actionCreators';

const TodoList = (props) =>{
    const {inputValue,handleChangeValue,handleAddTodoItem,list,handleDelete} = props;

    return (<Fragment>
        <div>
            <input
            value={inputValue}
            onChange={handleChangeValue}/>
            <button onClick={handleAddTodoItem}>提交</button>
        </div>
        <ul>
        {
           list.map((item,index)=>{
            return (<li onClick={handleDelete(index)}>{item}</li>)
           })
        }
        </ul>
    </Fragment>)
}

/**
 * 
 * @param {
 * 将store 中的state 转为 组件的props
 * 
 * } state 
 */
const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
};

/**
 * 将store 中的state 转为 props 的属性.
 * 同时我要对state进行修改，可以使用props来做变更.
 */
const mapDispatchToProps = (dispatch)=>{
    return {
        handleChangeValue(e){
            const action = changeItemValue(e.target.value)
            dispatch(action);
        },
        handleAddTodoItem(){
            const action = addTodoItem();
            dispatch(action);
        },
        handleDelete(index){
        }
    }
};

// 容器组件(业务逻辑，对Ui组件进行包装.).
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
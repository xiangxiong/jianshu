import React,{Component} from 'react';
import store from './store';
import {CHANGE_INPUT_VALUE,INIT_TODO_LIST} from './store/actionTypes';
import {changeInputValue,getTodoList} from './store/actionCreators';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
        store.subscribe(this.handleChangeState);
    }

    getList(){
        return  this.state.list.map((item,key)=>{
            return  (<ul key={key}>
                <li>{item}</li>
            </ul>)
        })
    }

    handleChangeClick(e){
        const action = changeInputValue(e.target.value);
        store.dispatch(action);
    }

    handleChangeState(){
        this.setState(()=>{
            return store.getState();
        });
    }

    handleAddTodoItem(){
        const action = {
            type:'add_todo_item'
        };
        store.dispatch(action);
    }

    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
    }

    render(){
        return (<div>
            <div>
                <input
                value={this.state.inputValue}
                onChange={this.handleChangeClick}/>
                <button onClick={this.handleAddTodoItem}>提交</button>
            </div>
            {
               this.getList()
            }
        </div>)
    }
}
export default TodoList;
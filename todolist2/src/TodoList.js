import React,{Component} from 'react';
import store from './store'
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList,initListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
        store.subscribe(this.handleStateChange);
    }

    handleButtonClick(){
        const action = getAddItemAction()
        store.dispatch(action);
    }

    handleChangeValue(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleListClick(index){
        const action  = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStateChange(){
        this.setState(()=>{
            return store.getState();
        })
    }

    render(){
        return  <TodoListUI 
            inputValue={this.state.inputValue}
            handleChangeValue = {this.handleChangeValue}
            handleButtonClick = {this.handleButtonClick}
            handleListClick = {this.handleListClick}
            list = {this.state.list}
        />
    }

    componentDidMount(){
        const action = getInitList();
        store.dispatch(action);
        console.log("action",action);

        // 使用 redux-thunk
        // const action = getTodoList();
        // store.dispatch(action);
        // console.log(action);
        // axios.get('/api/list.json')
        // .then(()=>{
        //     console.log('sucess');
        // })
        
        // const data = ["a","b","c"];
        // const action = initListAction(data);
        // store.dispatch(action);
    }
}

export default TodoList;
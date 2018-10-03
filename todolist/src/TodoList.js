import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'dd',
            list:['学习英文']
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    getTodoItem(){
        return this.state.list.map((item,index)=>{
            // key 值要放在循环的最外层.
            return (
                <TodoItem 
                key={index}
                index={index} 
                content={item}
                deleteItem={this.handleItemDelete}/>
           );
        })
    }

    render(){
        return (
            <Fragment>
                <label htmlFor="insertArea">输入内容:</label>
                <input 
                id="insertArea"
                className="input"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                /> 
                <button
                onClick={this.handleBtnClick}
                >提交</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        // 老的写法.
        // this.setState({
        //     inputValue:e.target.value
        // });
        const value = e.target.value;
        // ES6 最新版本写法
        this.setState(()=>({
           inputValue:value
        }));
    }

    handleBtnClick(){
        // es6  最新版本写法
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }));

        // 老的写法.
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // });
    }

    handleItemDelete(index){
        // 老的写法.
        // immutable 
        // state 不允许我们做任何改变.
        // const list = [...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // });
        
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }
}

export default TodoList;
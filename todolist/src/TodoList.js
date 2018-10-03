import React,{Component,Fragment} from 'react';
// import styles from './style.css';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{

    constructor(props){
        super(props);

        this.state = {
            inputValue:'dd',
            list:['学习英文','学习React']
        };
    }

    render(){

        const {list} = this.state;

        return (
            <Fragment>
                <label htmlFor="insertArea">输入内容:</label>
                <input 
                id="insertArea"
                className="input"
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                /> 
                <button
                onClick={this.handleBtnClick.bind(this)}
                >提交</button>
                <ul>
                    <TodoItem/>
                    {
                        list.map((item,index)=>{
                            return (<div>
                                <TodoItem 
                                index={index} 
                                content={item}
                                deleteItem={this.handleItemDelete.bind(this)}/>
                           </div>);
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        });
    }

    handleBtnClick(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        });
    }

    handleItemDelete(index){
        // immutable 
        // state 不允许我们做任何改变.
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        });
    }
}

export default TodoList;
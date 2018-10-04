import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store'
import {CHANGE_INPUT_VALUE,PUSH_CHANGE_LIST,DELETE_LIST_ITEM} from './store/actionTypes';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        store.subscribe(this.handleStateChange);
    }

    handleChangeValue(e){
        const action = {
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action);
    }

    handleStateChange(){
        this.setState(()=>{
            return store.getState();
        })
    }

    handleButtonClick(){
        const action = {
            type:PUSH_CHANGE_LIST,
            value:this.state.inputValue
        }
        store.dispatch(action);
    }

    handleListClick(index){
        const action = {
            type:DELETE_LIST_ITEM,
            index:index
        }
        store.dispatch(action);
    }

    render(){
        return (
            <Fragment>
                <div style={{margin:10}}>
                  <div>
                  <Input 
                  placeholder="Basic usage" 
                  value={this.state.inputValue}
                  onChange={this.handleChangeValue} 
                  style={{width:300,marginRight:10}}
                  />
                     <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                  </div>
                  <List
                    style={{marginTop:'30px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item  onClick={this.handleListClick.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </Fragment>
        )
    }
}

export default TodoList;
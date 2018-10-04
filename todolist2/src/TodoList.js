import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store'

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
            type:'change_input_value',
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
            type:'push_change_list',
            value:this.state.inputValue
        }
        store.dispatch(action);
    }

    handleListClick(index){
        const action = {
            type:'delete_list_item',
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
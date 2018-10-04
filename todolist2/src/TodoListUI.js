import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

class TodoListUI extends Component{

    render(){
        return <Fragment>
        <div style={{margin:10}}>
          <div>
          <Input 
          placeholder="Basic usage" 
          value={this.props.inputValue}
          onChange={this.props.handleChangeValue}
          style={{width:300,marginRight:10}}
          />
             <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
          </div>
          <List
            style={{marginTop:'30px',width:'300px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (<List.Item  onClick={(index)=>{this.props.handleListClick(index)}}>{item}</List.Item>)}
            />
        </div>
    </Fragment>
    }
}

export default TodoListUI;
import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

const TodoListUI = (props)=>{
    return (<Fragment>
        <div style={{margin:10}}>
        <div>
        <Input 
        placeholder="Basic usage" 
        value={props.inputValue}
        onChange={props.handleChangeValue}
        style={{width:300,marginRight:10}}
        />
            <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
        </div>
        <List
            style={{marginTop:'30px',width:'300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item  onClick={(index)=>{props.handleListClick(index)}}>{item}</List.Item>)}
            />
        </div>
    </Fragment>)
}

export default TodoListUI;
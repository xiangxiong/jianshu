import React,{Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleChangeClick = this.handleChangeClick.bind(this);
    }

    handleChangeClick(e){
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                <div>
                    <input 
                    value={this.props.inputValue}
                    onChange={this.props.changeInputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
         )
    }
}

// 我让TodoList和store 做连接，规则是mapStateToProps，把store 里面数据映射成组件里面属性，变成组件里面的Props.
// state 就是指store里面的数据.
const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue
    }
}

// 意思是: 我让TodoList和store 做连接，规则是mapStateToProps把store 里面数据映射成组件里面属性,
// 同时我想对store 里面的数据做修改, 也可以通过store的props 来做修改.
// mapDispatch = store.dispatch ,props
const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            const action = {
                type:'change_input_value',
                value:e.target.value
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);




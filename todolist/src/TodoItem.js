import React,{Component} from 'react';
import PropTypes  from 'prop-types';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // setState 降低虚拟dom 的比对次数.
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }
        return false;
    }

    render(){
        console.log('child render');
        const {content,test} = this.props;
        return <div key={this.props.index} onClick={this.handleClick}>
          {content}
        </div>
    }

    handleClick(){
        const {deleteItem,index} = this.props;
        deleteItem(index);
    }
}

// 验证是否必填.
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

// 默认属性.
TodoItem.defaultProps = {
    test:'hello world'
}

export default TodoItem;
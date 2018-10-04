## 技术栈:
create-react-app
react-transition-group
ui组件,容器组件
无状态组件
redux
redux-saga
redux-thunk
immutable.js
styled-components
redux-immutable
axios
antd
生命周期
React Fiber 16 版本以上功能.

## 2-3 工程目录文件简介

# 2-4 
-. React 响应式设计思想和事件绑定.

## 3-4 JSX 语法细节补充.

```
 <label htmlFor="insertArea">输入内容:</label>

  dangerouslySetInnerHTML={{__html:item}}
```

## 3-5 拆分组件与组件之间的传值
通过props 来进行子父节点属性之间传值.
```
<TodoItem 
           index={index} 
           content={item}
           deleteItem={this.handleItemDelete.bind(this)}/>

handleClick(){
        this.props.deleteItem(this.props.index);
}

```
## 3-6 TodoList 代码优化

1、将bind(this) 函数提取到构造函数中.
```
this.handleInputChange = this.handleInputChange.bind(this);
```

2、复杂的JSX语法要提炼出一个函数.
```
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
```

3、16版react 版本和老版本的写法的对比
```
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
```
## 3-7 围绕 React 衍生出的思考
-1.声明式的开发方式. (react)
-2.命令式的开发方式. (jquery)

-. 为什么使用单项数据流？
1、因为子组件有多个的时候，子组件改变state 的时候，
其他子组件使用了这个state的多会被跟着改变.
2、所以只能调用父类的方法去改变state.
-. 视图层的框架(redux,flux)
-. 组件化.
-. 数据层的框架.
-. 函数式编程.
render().constructor()
单一职责原则.
非常容易测试.
-. 可以与其他框架并存.

## 4-1 React Developer tools
1、可以监控state 状态.
2、可以监控组件之间的传值.


## 4-2 PropTypes 与 DefaultProps 的应用.
```
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

// 读取英文文档.
```

## 4-3 props，state 与 render 函数的关系.
-.react 数据驱动的框架.
-.当props 和 state 函数发生改变，render 方法会重新执行.
-. 当父组件的render 方法执行，子组件函数render 也会被重新运行.

## 4-4 React 中 ref 的使用
帮我们在react 里面直接获取dom 节点.
查看官方文档.
```
<ul ref={(ul)=>{this.ul = ul}}>
                    {this.getTodoItem()}
</ul>

this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }),()=>{
            console.log(   this.ul.querySelectorAll('div').length);
});
```

## 4-4 React 生命周期函数 及 使用场景.
-. 生命周期指在某一个时刻会自动调用执行的函数.

-. shouldComponentUpdate

```
   // 组件没有参数不会被执行.
   // 当一个组件从父组件接收参数,
   // 只要父组件的render函数执行了,子组件的这个生命周期就会被执行.
   componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    // 组件被更新之前，会被自动执行. shouldComponentUpdate 之后.
    // shouldComponentUpdate 返回true 执行, 返回 false 不执行.
    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    // 组件更新完成之后，被执行.
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    // 组件没有参数不会被执行.
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

```

## 4-9 使用Charles实现本地数据mock
-. 


## React 的Css 过渡效果.
-. 使用 react-transition-group 实现动画

-. React 的Css 过渡效果


## 5-1 Redux 概念简述
Redux = reducer + flux.

## 5-2 Redux 的工作流程

## 5-4 创建 redux 中的 store_x264(
-. 
```
reducer.js
const defaultState = {
    inputValue:'123',
    list:[1,2]
};

export default (state=defaultState,action)=>{
    return state;
}

store.js
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
```
## 5-5 Action 和 Reducer 的编写.

## 5-7 ActionTypes 拆分.
```
export const CHANGE_INPUT_VALUE = 'change_input_value';

export const PUSH_CHANGE_LIST = 'push_change_list';

export const DELETE_LIST_ITEM = 'delete_list_item';

```

## 5-8 使用 actionCreator 统一创建 action

```
import {CHANGE_INPUT_VALUE,PUSH_CHANGE_LIST,DELETE_LIST_ITEM} from './actionTypes';

export const getInputChangeAction = (value) =>({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () =>({
    type:PUSH_CHANGE_LIST
});

export const getDeleteItemAction = (index) =>({
    type:DELETE_LIST_ITEM,
    index
});

```

## 5-9 知识点复习
-.1. store 必须是唯一的.
-.2. 只有store 才能改变自己的内容.
-.3. Reducer 必须是纯函数.(给固定的输入，就一定会固定的输出. 不会有任何副作用.)
-.4. createStore,store.dipatch,store.getState,store.subscribe.



















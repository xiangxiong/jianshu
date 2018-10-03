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











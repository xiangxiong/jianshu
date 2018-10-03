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




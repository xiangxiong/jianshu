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

## 5-9 Redux 知识点复习
-.1. store 必须是唯一的.
-.2. 只有store 才能改变自己的内容.
-.3. Reducer 必须是纯函数.(给固定的输入，就一定会固定的输出. 不会有任何副作用.)
-.4. createStore,store.dipatch,store.getState,store.subscribe.

## 6-1 UI组件和容器组件
1、业务组件和逻辑进行分离。
拆分成 TodoList,TodoListUi.js
核心代码:
TodoList
```
 render(){
        return  <TodoListUI 
            inputValue={this.state.inputValue}
            handleChangeValue = {this.handleChangeValue}
            handleButtonClick = {this.handleButtonClick}
            handleListClick = {this.handleListClick}
            list = {this.state.list}
        />
    }

```
TodoListUi.js
```
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
```

## 6-2 无状态组件
1、当一个组件只有render函数的时候可以用无状态组件来替换这个组件.
2、优势：性能比较高. 还有生命周期函数.
3、定义一个UI组件的时候，没有逻辑的组件. 可以替换.

```
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

```

## 6-3 Redux 中发送异步请求获取数据
```
    componentDidMount(){
        // axios.get('/api/list.json')
        // .then(()=>{
        //     console.log('sucess');
        // })
        const data = ["a","b","c"];
        const action = initListAction(data);
        store.dispatch(action);
    }
```

## 6-4 使用Redux-thunk 中间件实现ajax数据请求 （反复练习3-5遍）
1、将复杂的业务逻辑，移入一个地方进行统一管理.
2、如何使用?
会执行Action 函数.
3、将业务数据逻辑移入到action里面.
4、使得action 里面可以写action 函数. (getTodoList)
5、redux-thunk 会对 getTodoList 自动执行.
6、好处：自动化测试的方便.
```
componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
        // console.log(action);
        // axios.get('/api/list.json')
        // .then(()=>{
        //     console.log('sucess');
        // })
        // const data = ["a","b","c"];
        // const action = initListAction(data);
        // store.dispatch(action);
}

export const getTodoList = ()=>{
    return (dispatch)=>{
           // axios.get('/api/list.json')
        // .then(()=>{
        //     console.log('sucess');
        // })
          // console.log(data);
        // const action = initListAction(data);
        // store.dispatch(action);
        
        const data = ["a","b","c"];
        const action = initListAction(data);
        dispatch(action);
    }
}
```
作业: 反复练习3-5遍.

## 6-4 什么是Redux的中间件 
1、中间件值的是 action 和 store 之间.
2、是对dispatch方法的封装.
3、如果是函数，会让函数先执行,在执行后续的操作.
4、对dispatch方法的升级，之前只能操作对象，现在能操作函数.
5、将异步操作单独抽离出来.利于自动化测试.
6、对dispatch 方法的升级.

## 6-6 Redux-saga 中间件使用入门
1.来代替redux-thunk.
redux-saga 会拦截action 执行相应的异步函数.
2、异步代码拆分的流程.
3、将异步代码拆分到一个文件里面管理.

## 如何使用 React-redux （反复练习3-5遍）
1、下面这样写是把store 提供给下面的所有的组件了.
2、Provider 去连接store.
```
  <Provider store={store}>
        <TodoList/>
    </Provider>
```
3、怎么获取store？
是通过connect 方法来获取的.
connect 方法是做连接，做什么连接？
让组件和store 做连接.
要有一定的链接方式:

```
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


```

## 7-1 项目目录搭建，Styled-Components 与 Reset.css 的结合使用
-. styled-components 使用
-. 重置 css 
https://meyerweb.com/eric/tools/css/reset/
```
import {injectGlobal} from 'styled-components';

injectGlobal `
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .dell{
    background: red;
  }

```

# 7-2 使用 styled-components 完成 Header 组件布局（1）
-. 1、实现带样式的组件.
-. 2、对组件样式进行隔离.
```
import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import {connect} from 'react-redux';

const Header = (props) =>{
    const {focused,handleRegisterClick} = props;
    // console.log(focused);
    return (
        <HeaderWrapper>
            <Logo href="/"/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe607;</i>
                </NavItem>
                <SearchWrapper>
                    <NavSearch></NavSearch>
                    <i className="iconfont">&#xe611;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button><i className="iconfont">&#xe626;</i>写文章</Button>
                <Button className='reg' onClick={handleRegisterClick}>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state)=>{
    return {
        focused:state.focused
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleRegisterClick(){
            const action = {
                type:'user_register_action',
                focused:true
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
```

# 7-4 使用 iconfont 嵌入头部图标
-.1、如何使用，在iconfont.com 上，新增一个项目将用到的东西加入到购物车里，统一下载.
-.2、下载的安装包里面，引入: iconfont.eot,iconfont.js,iconfont.svg,iconfont.ttf,iconfont.woff.
-.3、查看demo_unicode.html 文件，查看其用途.

将iconfont.js 作为全局的样式导入.
```
import {injectGlobal} from 'styled-components';
injectGlobal `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1538697662234'); /* IE9*/
    src: url('./iconfont.eot?t=1538697662234#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXIAAsAAAAACDAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8hEhuY21hcAAAAYAAAABeAAABnLN+GuNnbHlmAAAB4AAAAeIAAAH0/sG+ZWhlYWQAAAPEAAAALwAAADYTe9lyaGhlYQAAA/QAAAAeAAAAJAiBBNtobXR4AAAEFAAAABAAAAAQEVYAAGxvY2EAAAQkAAAACgAAAAoBRACUbWF4cAAABDAAAAAfAAAAIAEWAE1uYW1lAAAEUAAAAUUAAAJtPlT+fXBvc3QAAAWYAAAALQAAAD6eXD1yeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkCWOcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT9TY27438AQw9zA0A4UZgTJAQD8qwxteJztkLENgDAMBM9JgAjRZIlUlIiBqJg8awTHpmAI3jrLflkuHpiAqOxKArkRhi51xfzIan7i1D1rBWhLK632/p1MYhdZp+AfZObXZv14tzhScyzL4phfHeQB5gwSIgAAeJwd0L9vEnEYx/HnueO+3wot0N5xVyjlgC93BwYLcscdpciPao3R6GJjHIylJnUAk8boUBOjHRx0cDHhL1ATt7I4W02cWzt18G+QUUnk6hef9fMeXnlgBuDsWeC9uA/nQAYF4pACHRjkANDy3IqOqkINzXOdEprZCGIVNbRiNlpoadTyAvOjl4otD2TZ/zHsStKAREh30hA+jCb3vh0Ie8PJG3qcPtLRH+0vLAx4unuwxZsBId2/b38JH3n3czjtXseP0sc68Atw05l4KAJQiHBJCSDDrAxlaMuiaTFCRcm1K8vIqoywrFl1WuiwLNXCGFNUu+JeQuHw4TX/dGMHIw+u9CUiSLSHp+XmkxpmOite7367XtrKL6cTRvnkRAS/gK2oyWT/q5R8+r3klgt3wrM3jLtSMh5LVowUNwnc9EX8LLYhD20Aw7aa6LmmtYKWybKEhpESVUuhpmqqzSf+Nw6pOjgdppHrNbGFnP0/IuIn/JMrCOLFUqG/pi7WHxWdy6GQmlJWWeemqrk7xd/SXFRJ+GP98UbnxfaSTo1MvxOJRtfrzi1FI3PjC73a1VeVYm1GNHL53U5jzzEa6vlgANOpcSCYUOZxu7U5G2K319bftVavBwVhaXHTrT//BzSLbJAAAHicY2BkYGAAYjYmx6p4fpuvDNwsDCBw/c6pfQj6fyXLYuYGIJeDgQkkCgAorguWAHicY2BkYGBu+N/AEMMaxgAELIsZGBlQAQsAW6MDZwAABAAAAAVWAAAEAAAABAAAAAAAAAAASgCUAPoAAHicY2BkYGBgYXBk4GAAASYg5gJCBob/YD4DAA/HAWQAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAhZGJkZmRhZGVgSkpk8kxkSstMS89JTErMy+dgQEAOsUFpwAAAA==') format('woff'),
    url('./iconfont.ttf?t=1538697662234') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538697662234#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `;
```

# 7-6 使用 React-Redux 进行应用数据的管理
-.1、引入redux,react-redux 对组件进行包装.
-.2、提供mapStatetoProps,mapDispatchToProps. 对state,dispatch 的组件属性进行转换.
-.3、将UI组件进行抽离.

```
const Header = (props) =>{
    const {focused,handleRegisterClick} = props;
    return (
        <HeaderWrapper>
            <Logo href="/"/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe607;</i>
                </NavItem>
                <SearchWrapper>
                    <NavSearch></NavSearch>
                    <i className="iconfont">&#xe611;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button><i className="iconfont">&#xe626;</i>写文章</Button>
                <Button className='reg' onClick={handleRegisterClick}>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
```

## 7-7 使用 combineReducers 完成对数据的拆分管理.
 *  如果整个网站使用一个reducer.js 这个reducer.js 会过于臃肿.
 *  那么考虑把大的reducer.js 拆分成各个比较小的reducer.js 
 *  然后把这些reducer.js 整合到一个大的reducer.js 中.
 *  另外要注意的是:原来在mapStateToProps 
 *  focused:state.focused => focused:state.header.focused
 *  把其他的reducer 建立在其他的 组件下面去. store/reducer.js
 *  精简代码可以在store下面建立index.js
 
```
import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../common/header/store/';

/***
 *  如果整个网站使用一个reducer.js 这个reducer.js 会过于臃肿.
 *  那么考虑把大的reducer.js 拆分成各个比较小的reducer.js 
 *  然后把这些reducer.js 整合到一个大的reducer.js 中.
 *  另外要注意的是:原来在mapStateToProps 
 *  focused:state.focused => focused:state.header.focused
 *  把其他的reducer 建立在其他的 组件下面去. store/reducer.js
 *  精简代码可以在store下面建立index.js
 * **/

const reducer = combineReducers({
    header:headerReducer
});

export default reducer;

```







































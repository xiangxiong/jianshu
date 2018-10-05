import React,{Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Header extends Component{

    getListArea(){
        const {focused,list,page,mouseIn,totalPage,handleMouseEntry,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i = (page-1) * 10; i < page * 10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }

        if(focused||mouseIn){
            return (<SearchInfo 
                        onMouseEnter={handleMouseEntry}
                        onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>)
        }else{
            return null;
        }
    }

    render(){
        const {handleInputFocus,handleInputBlur,list} = this.props;

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
                        <NavSearch
                        onFocus={()=>handleInputFocus(list)}
                        onBlur={handleInputBlur}></NavSearch>
                        <i className="iconfont">&#xe611;</i>
                       {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button><i className="iconfont">&#xe626;</i>写文章</Button>
                    <Button 
                    className='reg' >注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        // focused:state.get('header').get('focused')
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(list){
            (list.size === 0)&&dispatch(actionCreators.getList());
            dispatch(actionCreators.seachFoucus(true));
        },
        handleInputBlur(){
            dispatch(actionCreators.seachFoucus(false));
        },
        handleMouseEntry(){
            dispatch(actionCreators.mouseEntry());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
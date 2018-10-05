import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';

const Header = (props) =>{
    const {focused,handleRegisterClick} = props;
    console.log(focused);
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
        focused:state.header.focused
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleRegisterClick(){
            dispatch(actionCreators.seachFoucus(true));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
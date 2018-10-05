import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,
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
        if(this.props.focused){
            return (<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        this.props.list.map((item)=>{
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        })
                    }
                </SearchInfoList>
            </SearchInfo>)
        }else{
            return null;
        }
    }

    render(){
        const {focused,handleRegisterClick,handleInputFocus,handleInputBlur} = this.props;

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
                        onFocus={handleInputFocus}
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
        list:state.getIn(['header','list'])
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.seachFoucus(true));
            dispatch(actionCreators.getList());
        },
        handleInputBlur(){
            dispatch(actionCreators.seachFoucus(false));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
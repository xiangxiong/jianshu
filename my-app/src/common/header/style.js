import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    display:block;
    background:url(${logoPic});
    background-Size:contain;
`;

export const Nav=styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`;

export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color: #333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding: 0 20px;
    border:none;
    outline:none;
    margin-left:20px;
    border-radius:10px;
    box-sizing:border-box;
    background:#eee;
    margin-top:9px;
    font-size:14px;
    &::palceholder{
        color:#999;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    line-height:38px;
    padding:0 20px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #1c6149;
    font-size:14px;
    &:reg{
        color:#ec6149;
    }
    &:writting{
        color:#fff;
        background:#ec6149;
    }
`





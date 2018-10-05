import {combineReducers} from 'redux-immutable';
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
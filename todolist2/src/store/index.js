import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware),
);
const store = createStore(
    reducer,
    enhancer
);
sagaMiddleware.run(TodoSagas);
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;
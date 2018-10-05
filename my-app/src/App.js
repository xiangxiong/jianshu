import React, { Component,Fragment } from 'react';
import Header from './common/header';
import store from './store/';
import {Provider} from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Fragment>
        <Header/>
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
       </Fragment>
      </Provider>
    );
  }
}

export default App;

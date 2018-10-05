import React, { Component,Fragment } from 'react';
import Header from './common/header';
import store from './store/';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Fragment>
        <Header/>
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact render={()=><div>home</div>}></Route>
              <Route path='/detail' exact render={()=><div>detail</div>}></Route>
            </Fragment>
          </BrowserRouter>
       </Fragment>
      </Provider>
    );
  }
}

export default App;

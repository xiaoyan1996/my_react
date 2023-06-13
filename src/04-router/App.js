import React, { Component } from 'react'

import { HashRouter,  Route, Redirect,  Switch } from 'react-router-dom';

import Films from './views/Films';
import Friend from './views/Friend';
import NotFound from './views/NotFound';

export default class App extends Component {
  render() { 
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/films" component={Films} />
            <Route path="/friend" component={Friend}/>
            {/* <Route /> */}

            {/* 路由重定向 */}
            {/* 模糊匹配 */}
            {/* exact 精确匹配 */}
            <Redirect from='/' to={'/films'} exact/>

            <Route component={NotFound}/>
          </Switch>

        </HashRouter>
      </div>
    ) 
  }
}


import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Store from './store';
import Home from './components/home';
import User from './components/user';
const App = () => {
  return (
    <Provider {...Store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};
export default App;

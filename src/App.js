import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import DefineAttributes from './components/DefineAttributes/DefineAttributes';
import AddElements from './components/AddElements/AddElements';
import List from './components/GetElements/GetElements';
import { Provider } from './Context/Context';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={DefineAttributes} />
          <Route exact path="/defineAttributes" component={DefineAttributes} />
          <Route exact path="/addElements" component={AddElements} />
          <Route exact path="/list" component={List} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

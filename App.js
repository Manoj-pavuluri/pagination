import React from 'react';
import Hello from './hello';
import {Switch,Route} from 'react-router-dom';
import Dashbord from './dashbord';
import Login from './login';

import Table from './table';
import Text from './text';
import Pagination from './pagination';
import DuplicateNames from './duplicateNames';

function App() {
  return (
    <div     className="App">
    <Switch>
      <Route path='/home' exact component={Hello} />
      <Route path='/dashbord' component ={Dashbord} />
      <Route path='/login' component ={Login} />
      <Route   path='/table' component ={Table} />
      <Route   path='/text' component ={Text} />
      <Route   path='/pagination' component ={Pagination} />
      <Route   path='/duplicate' component ={DuplicateNames} />
    </Switch>
    </div>
  )
}

export default App;

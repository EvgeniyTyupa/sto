import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='main'>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={()=><Main/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}


export default App;

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';

const Main = lazy(() => import('./Pages/Main/Main'));
const Services = lazy(() => import('./Pages/Services/Services'));

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='main'>
        <Navbar/>
        <Suspense fallback={Preloader}>
          <Switch>
            <Route exact path="/" render={()=><Main/>}/>
            <Route path="/services" render={()=><Services/>}/>
          </Switch>
        </Suspense>
        
      </div>
    </BrowserRouter>
  )
}


export default App;

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';
import ScrollIntoView from './Components/ScrollIntoView/ScrollIntoView';
import Contacts from './Pages/Contacts/Contacts';
import Service from './Pages/Services/Service/Service';

const Main = lazy(() => import('./Pages/Main/Main'));
const Services = lazy(() => import('./Pages/Services/Services'));

const App = (props) => {
  return(
    <BrowserRouter> 
      <div className='main'>
        <Navbar/>
        <Suspense fallback={Preloader}>
          <ScrollIntoView>
            <Switch>
              <Route exact path="/" render={()=><Main/>}/>
              <Route exact path="/services" render={()=><Services/>}/>
              <Route path="/services/:service" render={()=><Service/>}/>
              <Route path="/contacts" render={()=><Contacts/>}/>
            </Switch>
          </ScrollIntoView>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}


export default App;

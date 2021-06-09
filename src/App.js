import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';
import ScrollIntoView from './Components/ScrollIntoView/ScrollIntoView';

const Main = lazy(() => import('./Pages/Main/Main'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Contacts = lazy(() => import('./Pages/Contacts/Contacts'));
const Service = lazy(() => import('./Pages/Services/Service/Service'));

const App = (props) => {
  return(
    <Router> 
      <HttpsRedirect>
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
      </HttpsRedirect>
      
    </Router>
  )
}


export default App;

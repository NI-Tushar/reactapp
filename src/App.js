import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ScrollToTop from './ScrollToTop.js';

import Headerbar from './UP-BAR/Headerbar.js';

import Homepage from './Homepage.js';
import Gmail from './NAVPAGE/Gmail';
import Voice from './NAVPAGE/Voice';
import Amazon from './NAVPAGE/Amazon.js';
import Service from './NAVPAGE/Service';
import About from './NAVPAGE/About.js';
import Contact from './NAVPAGE/Contact.js';
import Buyfacebook from './NAVPAGE/Buyfacbook.js';
import Buytwitter from './NAVPAGE/Buytwitter.js';
import Androidapp from './NAVPAGE/Androidapp.js';
import Referral from './NAVPAGE/Referral.js';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Headerbar />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/Gmail" component={Gmail}></Route>
        <Route path="/Voice" component={Voice}></Route>
        <Route path="/Amazon" component={Amazon}></Route>
        <Route path="/Service" component={Service}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Buyfacebook" component={Buyfacebook}></Route>
        <Route path="/Buytwitter" component={Buytwitter}></Route>
        <Route path="/Androidapp" component={Androidapp}></Route>
        <Route path="/Referral" component={Referral}></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

  
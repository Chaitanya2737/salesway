import React from 'react'
import './App.css';
import SideNavBar from './compnents/Navbar/SideNavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>


      <Switch>
        <Route path="/">
          <SideNavBar />
        </Route>
      </Switch>

    </>

  );
}

export default App;

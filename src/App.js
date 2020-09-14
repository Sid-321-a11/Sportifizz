import React from 'react';
import {Route, Switch} from "react-router-dom";
import NavbarC from './Components/Navbar.js'
import UpperNav from './Components/UpperNav.js'
import Body from './Components/Body.js'
function App() {
  return (
    <Switch>
      <Route>
        <UpperNav />
        <NavbarC />
        <Body />
      </Route >
    </Switch>

  );
}

export default App;

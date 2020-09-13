import React from 'react';
import {Route, Switch} from "react-router-dom";
import NavbarC from './Components/Navbar.js'

function App() {
  return (
    <Switch>
      <Route>
        <NavbarC />
      </Route > 
    </Switch>

  );
}

export default App;

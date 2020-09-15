import React from 'react';
import {BrowserRouter,  Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component="home">
       <Navbar />
      </Route >
    </Switch>
    </BrowserRouter>
  );
}

export default App;

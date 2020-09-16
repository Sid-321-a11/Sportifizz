import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";


function App() {
  return (
<BrowserRouter>
<Switch>
<Route path="/checkout">
<h1>Checkout page</h1>
</Route>
<Route path="/loginpage">
<h1>Login page</h1>
</Route>
<Route path="/">
<Navbar />
</Route>
</Switch>

</BrowserRouter>
  );
}

export default App;

import Props from './component/Props';
import React, {useState} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <h3>This is Comp 1 page</h3>
              <Link to ={'/a'}>link to /a</Link>
            </Route>
            <Route exact path="/a">
              <h3>This is Comp 2 page</h3>
              <Link to ={'/'}>link to /</Link>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
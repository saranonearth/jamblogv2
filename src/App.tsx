import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import * as Firebase from "./utils/firebase";
import StoreProvider from "./Store/StoreProvider";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;

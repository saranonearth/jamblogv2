import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import * as Firebase from "./utils/firebase";
import StoreProvider from "./Store/StoreProvider";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Archive from "./components/Archive";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/archive" component={Archive} />
        </Switch>
      </StoreProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

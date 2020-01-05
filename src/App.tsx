import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import * as Firebase from "./utils/firebase";
import StoreProvider from "./Store/StoreProvider";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Archive from "./components/Archive";
import Contributors from "./components/Contributors";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Onboard from "./components/Onboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/contributors" component={Contributors} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/onboard" component={Onboard} />
        </Switch>
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;

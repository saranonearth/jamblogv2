import React, { useReducer, useContext } from "react";
import * as Firebase from "./utils/firebase";
import Store from "./Store/Store";
import Reducer from "./Store/Reducer";
import { IStore } from "./Store/Store";

const App: React.FC = () => {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(Reducer, initialState);

  console.log(state);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="App"></div>
    </Store.Provider>
  );
};

export default App;

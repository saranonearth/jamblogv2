import * as React from "react";
import Reducer from "./Reducer";
import Store from "./Store";

interface IProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const initialState = React.useContext(Store);
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <>
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    </>
  );
};
export default StoreProvider;

import * as React from "react";
import Reducer from "./Reducer";
import Store from "./Store";
import { auth, firestore } from "../utils/firebase";

interface IProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = ({ children }) => {
  const initialState = React.useContext(Store);
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        //todo_ fetch user doc:  if user not available push to onboard
        firestore
          .collection("users")
          .doc(user?.uid)
          .get()
          .then(doc => {
            if (doc.data() === undefined) {
            } else {
              dispatch({
                type: "LOGIN",
                payload: user?.uid
              });
              dispatch({
                type: "ONBOARD",
                payload: doc.data()
              });
            }
          });
      } else {
        dispatch({
          type: "LOGOUT",
          payload: null
        });
      }
    });
  }, []);
  return (
    <>
      <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
    </>
  );
};
export default StoreProvider;

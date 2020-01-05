import { createContext } from "react";

export interface IStore {
  isAuth: boolean;
  user: any;
  uid: string;
}

const Store = createContext<IStore | any>({
  isAuth: false,
  user: null,
  uid: null
});

export default Store;

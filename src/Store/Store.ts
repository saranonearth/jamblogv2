import { createContext } from "react";

export interface IStore {
  isAuth: boolean;
  user: any;
  uid: string;
  firstTime: boolean;
}

const Store = createContext<IStore | any>({
  isAuth: false,
  user: null,
  uid: null,
  firstTime: true
});

export default Store;

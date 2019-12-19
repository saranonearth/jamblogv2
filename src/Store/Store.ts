import { createContext } from "react";

export interface IStore {
  isAuth: boolean;
  user: any;
}

const Store = createContext<IStore | any>({
  isAuth: false,
  user: null
});

export default Store;

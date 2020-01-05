import { IStore } from "./Store";
type Action =
  | {
      type: "LOGIN";
      payload: string;
    }
  | {
      type: "ONBOARD";
      payload:
        | any
        | {
            image: string;
            bio: string;
            name: string;
            firstTime: boolean;
            articleCount: number;
          };
    }
  | { type: "LOGOUT"; payload: null };

const Reducer = (state: IStore, action: Action): IStore => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        uid: payload,
        isAuth: true
      };
    case "ONBOARD":
      return {
        ...state,
        user: payload,
        isAuth: true,
        firstTime: payload.firstTime
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        firstTime: true,
        user: null,
        uid: ""
      };
    default:
      return state;
  }
};

export default Reducer;

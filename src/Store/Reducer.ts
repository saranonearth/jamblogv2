import { IStore } from "./Store";
import { userInfo } from "os";
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
  | { type: "LOGOUT"; payload: null }
  | {
      type: "EDIT_PROFILE";
      payload: any | { image: string; name: string; bio: string };
    };

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
    case "EDIT_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          name: payload.name,
          image: payload.image,
          bio: payload.bio
        }
      };
    default:
      return state;
  }
};

export default Reducer;

import { IStore } from "./Store";
type Action = { type: "LOGIN"; payload: string };

const Reducer = (state: IStore, action: Action): IStore => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      console.log(payload);
      return {
        ...state,
        uid: payload,
        isAuth: true
      };

    default:
      return state;
  }
};

export default Reducer;

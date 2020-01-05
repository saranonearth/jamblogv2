import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { auth, firestore } from "../utils/firebase";
import Store from "../Store/Store";

interface Props {}

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const { state, dispatch } = useContext(Store);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res);
      firestore
        .collection("users")
        .doc(res.user?.uid)
        .get()
        .then(doc => {
          console.log(doc.data());
        });

      dispatch({
        type: "LOGIN",
        payload: res.user?.uid
      });
    } catch (error) {
      console.log(error);
    }
  });
  console.log(state);
  return (
    <div>
      <div className="container">
        <div className="center login">
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-item">
              <label htmlFor="email">E-mail Id</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                ref={register}
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                ref={register}
                required
              />
            </div>
            <div>
              <button className="btn btn-primary btn-sm rounded color mt-3">
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 center">
          Interested to become a contributor? Write to us at jam2010@gmail.com
          or DM us on instagram
        </p>
      </div>
    </div>
  );
};

export default Login;

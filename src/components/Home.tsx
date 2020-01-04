import * as React from "react";
import Store from "../Store/Store";
import { auth } from "../utils/firebase";
import Banner from "./Banner";
import LatestPosts from "./LatestPosts";

const Home: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  console.log(state, dispatch);
  console.log(auth);
  return (
    <>
      <Banner />
      <LatestPosts />
    </>
  );
};
export default Home;

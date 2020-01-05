import React, { useContext } from "react";
import Store from "../Store/Store";
import { Redirect } from "react-router-dom";
interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { state } = useContext(Store);

  if (!state.isAuth) return <Redirect to="/" />;
  return <div>Dashboard</div>;
};

export default Dashboard;

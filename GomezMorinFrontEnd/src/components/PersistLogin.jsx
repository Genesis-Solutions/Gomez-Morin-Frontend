import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRefreshToken } from "../queries/queryAuth";

/**
 *  This component is used to persist the user's login.
 *  It is used to refresh the token and keep the user logged in.
 *
 * @returns  {JSX.Element} The JSX element representing the layout UI.
 */
const PersistLogin = () => {
  const refresh = useRefreshToken();
  useEffect(() => {
    refresh();
  }, []);
  return <Outlet />;
};

export default PersistLogin;

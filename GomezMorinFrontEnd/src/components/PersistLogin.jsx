import React from "react";
import { setAccessToken, setUser } from "../states/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useRefreshToken } from "../queries/queryAuth";

const PersistLogin = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const logged = useSelector((state) => state.auth.logged);
  const refresh = useRefreshToken();
  useEffect(() => {
    console.log(accessToken)

    refresh();


   
  }, []);
  return (
    
        <Outlet />


  );
};

export default PersistLogin;
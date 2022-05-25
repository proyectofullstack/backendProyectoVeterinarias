import React from "react";
import { Outlet } from "react-router-dom";
import './AuthLayout.css'
const AuthLayout = () => {
  return (
    <>
      <div className="container">
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

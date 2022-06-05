import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Header from "../areasPrivadas/header/Header";
import SideBar from "../areasPrivadas/sideBar/SideBar";
import "./RutasProtegidas.css";


const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <>
      {auth._id ?
        (
          <div className="headers">
            <Header />
            <div className="ruta-sidebar">
              <SideBar />
              <div className="outlet-consulta">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* <Navigate to="/" /> */}
            <div className="headers">
              <Header />
              <div className="ruta-sidebar">
                <SideBar />
                <div className="outlet-consulta">
                  <Outlet />
                </div>
              </div>
            </div>

          </>
        )}
    </>
  );
};

export default RutaProtegida;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../mensajes/Alerta";
import usuarioAxios from "../../config/usuarioAxios";


const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }
    try {
      const { data } = await usuarioAxios.post(
        `/usuarios/olvidar-password`,
        { email }
      );
       
      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  // extraer el mensaje

  const { msg } = alerta;
  return (
    <>
      <h1 className="">Recuperar tu cuenta</h1>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Ingresa tu correo"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Enviar instrucciones" className="iniciar" />
      </form>

      <nav className="linckNav">
        <div>
          <Link to="/">¿Ya tienes una cuenta? inicia sesión</Link>
        </div>
        <div>
          <Link to="/registrar">No tienes una cuenta regístrate</Link>
        </div>
      </nav>
    </>
  );
};

export default OlvidePassword;

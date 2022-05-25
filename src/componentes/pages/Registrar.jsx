import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alerta from "../mensajes/alerta";
import axios from "axios";
import usuarioAxios from "../../config/usuarioAxios";


const Registrar = () => {
  //------ state para recibir la info de los inputs y alertas ----------------
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    //--------------------Validar contenido ----------------------

    if ([nombre, email, password, password2].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== password2) {
      setAlerta({
        msg: "Los passwords no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "Minimo 6 caracteres",
        error: true,
      });
      return;
    }
    // ----------- Reiniciar mensaje alerta --------------
    setAlerta({});

    //---------- Comunicación con el backEnd con axios -------------

    try {
      const { data } = await usuarioAxios.post(`/usuarios`, {
        nombre,
        email,
        password,
      });

      setAlerta({msg:data.msg, error:false });
      setNombre('');
      setEmail('');
      setPassword('');
      setPassword2('');


    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="">Crea tu cuenta</h1>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">nombre</label>
        <input
          id="nombre"
          type="name"
          placeholder="Ingresa tu nombre"
          className=""
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Ingresa tu correo"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Ingresa tu password"
          className=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="password2">Repetir Password</label>
        <input
          id="password2"
          type="password"
          placeholder="Repite tu password"
          className=""
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <input
          type="submit"
          placeholder="Registrar usuario"
          className="iniciar"
        />
      </form>

      <nav className="linckNav">
        <div>
          <Link to="/">¿Ya tienes una cuenta? inicia sesión</Link>
        </div>
      </nav>
    </>
  );
};

export default Registrar;

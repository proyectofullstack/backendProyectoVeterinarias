import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usuarioAxios from "../../config/usuarioAxios";
import useAuth from "../../Hooks/useAuth";
import Alerta from "../mensajes/Alerta";
import '../pages/Login.css';


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth();





  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return
    }
    try {
      const { data } = await usuarioAxios.post('/usuarios/login', { email, password })
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }


  const { msg } = alerta;
  return (
    <>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/abocato-1.appspot.com/o/TuVetExpress-03.png?alt=media&token=7978c534-5871-4c8d-8ad6-fb935a65ea9b" alt="logo" />
      </div>
      <h1 className="">Inicio de Sesión</h1>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email de registro"
          className=""
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          className=""
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input
          type="submit"
          value="Iniciar Sesión"
          className="iniciar" />
      </form>

      <nav className="linkNav">
        <div>
          <Link to="registrar">¿No tienes una cuenta? Registrate</Link>
        </div>
        <div>
          <Link to="olvidar-password">Olvidé mi contraseña</Link>
        </div>
      </nav>
    </>
  );
};

export default Login;

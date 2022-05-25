import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import usuarioAxios from "../../config/usuarioAxios";
import useAuth from "../../Hooks/useAuth";
import Alerta from "../mensajes/Alerta";


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth();
  
 



  const handleSubmit = async (e) => {
    e.preventDefault();

    if([ email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return
    }
    try {
      const { data } = await usuarioAxios.post('/usuarios/login',{email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth( data )
      
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
      <h1 className="">Iniciar sesión</h1>
      {msg && <Alerta alerta={alerta} />}
      <form onSubmit={ handleSubmit }>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email de registro"
              className=""
              value={ email }
              onChange = { e => setEmail(e.target.value)}
            />
    
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className=""
              value={ password }
              onChange = { e => setPassword(e.target.value)}
            />
    
            <input 
              type="submit" 
              value="Iniciar Sesión" 
              className="iniciar" />
      </form>

      <nav className="linckNav">
        <div>
          <Link to="registrar">No tienes una cuenta? Registrate</Link>
        </div>
        <div>
          <Link to="olvidar-password">Olvide mi password</Link>
        </div>
      </nav>
    </>
  );
};

export default Login;

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../mensajes/Alerta'
import usuarioAxios from '../../config/usuarioAxios'



const NuevoPassword = () => {

  const [tokenValido, setTokenValido] = useState(false)
  const params = useParams();
  
  const { token } = params;
  

  useEffect(() => {
    
      const comprobarToken = async () => {
        try {
         await usuarioAxios(`/usuarios/olvidar-password/${token}`);
         console.log( token);
        setTokenValido(true)
        } catch (error) {
            console.log(error.response);
        }
      }
   comprobarToken()
  }, [])
  
  return (
    <>
    <h1 className="">Reestablecer password</h1>
    <form>
  
      <label htmlFor="password">Nuevo Password</label>
      <input
        id="password"
        type="password"
        placeholder="Ingresa nuevo password"
        className=""
      />

      <input type="submit" value="Guardar nuevo password" className="iniciar" />
    </form>

   
  </>
  )
}

export default NuevoPassword
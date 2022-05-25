import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../mensajes/Alerta'
import usuarioAxios from '../../config/usuarioAxios'

 

function ConfirmarCuenta() {

  const [alerta, setAlerta] = useState({});
  const [cuentaconfirmada, setCuentaconfirmada] = useState(false);
   const params = useParams();
   
   const { id } = params;


   useEffect(() => {
     const confirmarcuenta = async () => {


      try {
          const url = `/usuarios/confirmar/${id}`;
          const { data } = await usuarioAxios.get(url);

          setAlerta({ 
            msg: data.msg,
            error: false
          })

       
          setCuentaconfirmada(true)
           
      } catch (error) {
          setAlerta({ 
            msg: error.response.data.msg,
            error: true
          })
      }
     }
   
      confirmarcuenta();
   }, [])


   //Extraer mensaje de alerta
   const { msg} = alerta;
   
  return (
    <>
    <h1 className="">Confirma tu cuenta</h1>
     <p>Mensaje desde la url</p>

     <div>
       {msg && <Alerta alerta = {alerta} />}

       { cuentaconfirmada && (
          <Link to="/">Inicia sesión</Link>
         )}
     </div>

        
  </>
  )
}

export default ConfirmarCuenta
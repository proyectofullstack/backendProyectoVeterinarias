import React, { useState, useEffect, createContext} from 'react'
import usuarioAxios from '../config/usuarioAxios';
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate();
    // Solo se ejecuta una vez para comprobar el token
    useEffect(() => {

        const autenticarUsuario = async () => {
            const token = localStorage.getItem( 'token' )
            if(!token){
                setCargando(false)
                return
            }

            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`
                }

            }

            try {
                const { data } = await usuarioAxios('/usuarios/perfil', config)
                setAuth( data );
                navigate('/consultas') //Es opcional para no estar iniciando seccion
            } catch (error) {
                setAuth({})
            }
            setCargando(false)
        }
        autenticarUsuario()
       
    }, [])


  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth,
           cargando
        }}
    >
        
        {children}
        </AuthContext.Provider>
  )

}
export { AuthProvider}

export default AuthContext
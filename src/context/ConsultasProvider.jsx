import { useState, useEffect, createContext } from "react";
import usuarioAxios from "../config/usuarioAxios";

const ConsultasContext = createContext();

const ConsultasProvider = ( { children }) => {

    const [consultas, setConsultas] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [consulta, setConsulta] = useState({});

    const [cargando, setCargando] = useState(false)



   useEffect(() => {
     
    const obtenerConsultas =  async () => {

        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
               headers: {
                   "Content-Type": "application/json",
                   Authorization: `Bearer ${ token }`
               }
           }

           const { data } = await usuarioAxios('/consultas', config);
            
           setConsultas( data )

        } catch (error) {
            console.log(error);
            
        }
    }
    obtenerConsultas()
   }, [])
   

    const mostrarAlerta = (alerta) => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 3000);
    }
     

    const submitConsulta = async consulta => {
         
        console.log(consulta);
        return
         try {
             const token = localStorage.getItem('token')
             if(!token) return

             const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`
                }
            }

            const { data } = await usuarioAxios.post('/consultas', consulta, config);
            setConsultas([...consultas, data])
             

         } catch (error) {
             console.log(error);
             
         }
    }



    const obtenerConsulta = async id =>{
        setCargando(true)
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
               headers: {
                   "Content-Type": "application/json",
                   Authorization: `Bearer ${ token }`
               }
           }

           const { data } = await usuarioAxios(`/consultas/${id}`, config);
           setConsulta( data )
            

        } catch (error) {
            console.log(error);
        }
        setCargando(false)
    }

    return (

        <ConsultasContext.Provider value={{ 
            consultas,
            mostrarAlerta,
            alerta, 
            submitConsulta,
            obtenerConsulta,
            consulta, 
            cargando
            }}>
            {children}
        </ConsultasContext.Provider>
    )
}

export {
    ConsultasProvider
}

export default ConsultasContext
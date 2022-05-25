import React, { useEffect } from 'react'
import useConsultas from '../../Hooks/useConsultas'
import { useParams } from 'react-router-dom'
import FormularioConsultas from '../FormularioConsultas/FormularioConsultas'


const EditarConsulta = () => {

  const params = useParams();
     
  const { obtenerConsulta, consulta, cargando } = useConsultas();
 
 useEffect(() => {
  obtenerConsulta(params.id)
 }, [])
 
 const { nombrePaciente } = consulta

 if(cargando) return 'Cargando...'
  return (
    <>
    <h2>Editar consulta: {nombrePaciente}</h2>
    <div>
      <FormularioConsultas />
    </div>

    </>
  )
}

export default EditarConsulta
import { useParams, Link } from 'react-router-dom'
import React, { useEffect } from 'react';

import useConsultas from '../../Hooks/useConsultas';

const Consulta = () => {

   const params = useParams();
     
   const { obtenerConsulta, consulta, cargando } = useConsultas();
  
  useEffect(() => {
   obtenerConsulta(params.id)
  }, [])
  
  const { nombrePaciente, edad, sintomas, fecha } = consulta

  return (

    cargando ? 'Cargando...' : (

      
      <div className='obtener-consulta-div'>
        <h2 className='obtener-consulta-h2'>{ nombrePaciente }</h2>
        <div>
          <div className='obtener-consulta-div-mix'>
            <p className='obtener-consulta-p-label'>Nombre del paciente:</p>
            <p className='obtener-consulta-p'> {nombrePaciente }</p>
            <p className='obtener-consulta-p-label'>Edad del paciente:</p>
            <p className='obtener-consulta-p'> {edad } años</p>
            <p className='obtener-consulta-p-label'>Sintomas: </p>
            <p className='obtener-consulta-p'>{sintomas }</p>
            <p className='obtener-consulta-p-label'>Nombre del paciente:</p>
            <p className='obtener-consulta-p'>{fecha }</p>
          </div>
            <Link to={`/consultas/editar/${params.id}`}>Editar</Link>
        </div>
    </div>
      )
  )
}

export default Consulta
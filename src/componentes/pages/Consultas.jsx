import React from 'react'
import useConsultas from '../../Hooks/useConsultas';
import PreviewConsulta from '../previewConsulta/PreviewConsulta';
import '../pages/Consultas.css';

const Consultas = () => {

  const { consultas } = useConsultas();


  return (
    <>
      <h4 className='titulo-consulta'>Historial médico</h4>
      <div className='consulta-div'>
        {consultas.length ?
          consultas.map(consulta => (
            <PreviewConsulta

              key={consulta._id}
              consulta={consulta}
            />
          ))

          : <p className='consulta-p'>No tienes historial médico de tu mascota aún...</p>}
      </div>


    </>
  )
}

export default Consultas
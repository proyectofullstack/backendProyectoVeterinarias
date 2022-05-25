import React from 'react'
import { Link} from 'react-router-dom'

const PreviewConsulta = ({ consulta }) => {

    const { nombrePaciente, _id, dueño} = consulta;
  return (
    <div className='previewConsulta-div'>
    
        <p className='previewConsulta-p'>
            { nombrePaciente }
        </p>

        <Link to={`${_id }`}>Ver Consulta</Link>
    
    </div>
  )
}

export default PreviewConsulta
import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'error' : 'aler'}`}>{alerta.msg}</div>
  )
}

export default Alerta
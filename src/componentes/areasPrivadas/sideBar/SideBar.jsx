import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'

import './SideBar.css'

const SideBar = () => {

  const { auth } = useAuth();
  return (
    <aside className='md-aside'>
        <p>Hola { auth.nombre }</p>
        <Link  to='crear-consulta' className='sidebar-link'>Nueva Consulta</Link>
        <Link  to='farmacias' className='sidebar-link'>Farmacias</Link>
        <Link  to='veterinarias' className='sidebar-link'>Veterinarias 24 horas</Link>
    </aside>
  )
}

export default SideBar
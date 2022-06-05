import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className='header'>
        <img src="https://firebasestorage.googleapis.com/v0/b/abocato-1.appspot.com/o/TuVetExpress-03.png?alt=media&token=7978c534-5871-4c8d-8ad6-fb935a65ea9b" alt="logo" />
        <input
          type='search'
          placeholder='Buscar consulta'
          className='header-input'
        />

        <div className='header-link'>
          <Link to='/consultas' className='link'>Consultas</Link>
          <button type='button'>Cerrar sesión</button>
        </div>

      </div>
    </header>
  )
}

export default Header
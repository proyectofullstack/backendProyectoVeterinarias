import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
        <div className='header'>
            <h2>Proyecto Veterinaria</h2>
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
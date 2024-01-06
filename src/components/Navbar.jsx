import { Link } from 'react-router-dom'
import { useTheme } from '../hook/useTheme'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'
import { useState } from 'react'

export default function Navbar() {

  const { color } = useTheme()



  return (
    <div className="navbar" style={{ background: color }}>
      <nav >
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}
import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

  return (
    <div className='navbar'>
      <div className='mylogo'>
      <Link to='/'>Beynəlxalq sosial elmlər konfransı</Link>
      </div>
      <div className='logo'>
        <Link to="/">Home</Link>
        <Link to='/konfrans'>Konfrans</Link>
        <Link to='/yazi'>Y qaydalari</Link>
        <Link to='/elaqe'>Elaqe</Link>
        <a href='https://docs.google.com/forms/d/1pwzfVfB262W8ho6uaXtaVipoHztYi0PIDWAQHLoZPQA/closedform'><button>Muraciet</button></a>
      </div>
    </div>

  )
}

export default Navbar
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (

    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Newzilla</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" aria-current to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="general">General</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" aria-current to="technology">Technology</Link></li>
          </ul>

          <form className="d-flex" role="search">
            <Link to="saved"><button className="btn btn-md btn-success mx-2">Saved</button></Link>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <Link to="/" className="navbar-brand font-weight-bold">React Phone Store</Link>
    {/* <a className="navbar-brand" href="#">React Phone Store</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
      </ul>
    </div>
  </nav>
  )

export default NavBar
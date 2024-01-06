import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand">
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            Alpha Health
        </Link>
    </span>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
            <span className="nav-link active">
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    Patients
                </Link>
            </span>
        </li> */}
        <li className="nav-item">
            <span className="nav-link active">
                <Link to="/doctor/login" style={{textDecoration: 'none', color: 'white'}}>
                    Doctors
                </Link>
            </span>
        </li>
        <li className="nav-item">
            <span className="nav-link active">
                <Link to="/admin/login" style={{textDecoration: 'none', color: 'white'}}>
                    Admin
                </Link>
            </span>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
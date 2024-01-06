import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
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

          <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Appointments
          </span>
          <ul className="dropdown-menu">
            <li>
                <Link to="/admin/appointment/create" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Create an Appointment
                </Link>
            </li>
            <li>
                <Link to="/admin/appointment/all" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        View all Appointments
                    </Link>
            </li>
            <li>
                <Link to="/admin/appointment/update" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Update an Appointment
                    </Link>
            </li>
            <li>
            <Link to="/admin/appointment/delete" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Delete an Appointment
                    </Link>
            </li>
          </ul>
        </li>

          

            
            

        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Patients
          </span>
          <ul className="dropdown-menu">
            <li>
                <Link to="/admin/patient/create" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Add Patient
                </Link>
            </li>
            <li>
                <Link to="/admin/patient/all" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        View all Patients
                    </Link>
            </li>
            <li>
                <Link to="/admin/patient/update" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Update a Patient
                    </Link>
            </li>
            <li>
            <Link to="/admin/patient/delete" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Delete a Patient
                    </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Doctors
          </span>
          <ul className="dropdown-menu">
            <li>
                <Link to="/admin/doctor/create" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Add Doctor
                </Link>
            </li>
            <li>
                <Link to="/admin/doctor/all" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        View all Doctors
                    </Link>
            </li>
            <li>
                <Link to="/admin/doctor/update" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Update a Doctor
                    </Link>
            </li>
            <li>
            <Link to="/admin/doctor/delete" className="dropdown-item" style={{textDecoration: 'none', color: 'black'}}>
                        Delete a Doctor
                    </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
            <span className="nav-link active">
                <Link to="/admin/create" style={{textDecoration: 'none', color: 'white'}}>
                    Add Admin
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

export default AdminNavbar
import React from 'react'
import Navbar from './Navbar'

function UpdateAppointmentDenied() {
  return (
    <>
    <Navbar />
    <div className="container mt-5">
    <div className="text-center">
        <span className="nav-link active">
        Please contact admin to create, update or delete any appointment.
        </span>
    </div>
    </div>
    </>
  )
}

export default UpdateAppointmentDenied
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function AllAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get(server_url + '/alphahealth/allAppointments').then(response => {
            console.log(response)

            setAppointments(response.data);

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });
    }, [])
    
  return (
    <>
        <AdminNavbar />

        <div className="container mt-5">
          <h3>All Appointments</h3>
          <br/>
        <ul>
          {appointments.map(appt => (
            <li key={appt.id}>Appointment Id - {appt.id}. <br></br>Patient {appt.patient_fullname} has booked an appointment with Dr. {appt.doctor_fullname} on {appt.date} at {appt.time}.</li>
          ))}
        </ul>
        </div>

    </>
  )
}

export default AllAppointments
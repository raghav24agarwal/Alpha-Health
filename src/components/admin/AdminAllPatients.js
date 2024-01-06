import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";


function AdminAllPatients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get(server_url + '/alphahealth/allPatients').then(response => {
            console.log(response)

            setPatients(response.data);

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });
    }, [])
    
  return (
    <>
        <AdminNavbar />

        <div className="container mt-5">
          <h3>All Patients</h3>
          <br/>
        <ul>
          {patients.map(appt => (
            <li key={appt.id}>Patient Id - {appt.id}. <br></br>Patient Name - {appt.fullname} </li>
          ))}
        </ul>
        </div>

    </>
  )
}

export default AdminAllPatients
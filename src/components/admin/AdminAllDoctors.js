import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function AdminAllDoctors() {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get(server_url + '/alphahealth/allDoctors').then(response => {
            console.log(response)

            setDoctors(response.data);

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });
    }, [])

  return (
    <>
        <AdminNavbar />

        <div className="container mt-5">
          <h3>All Doctors</h3>
          <br/>
        <ul>
          {doctors.map(appt => (
            <li key={appt.id}>Doctor Id - {appt.id}. <br></br>Doctor Name - {appt.fullname}</li>
          ))}
        </ul>
        </div>

    </>
  )
}

export default AdminAllDoctors
import React, { useState } from 'react'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function DeleteAppointment() {

    const [apptId, setApptId] = useState(0);

    const deleteAppointment = e => {
        e.preventDefault();

        if (apptId === 0) {
            
            alert("Appointment ID cannot be empty");
            
          } else {

              axios.delete(server_url + `/alphahealth/deleteAppointment/${apptId}`)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Appointment Deleted.");
                        setApptId("");
                    }
                // console.log(res)
                             
                })
                .catch((err) => {
                alert("Server Error, please try again!!")
                })
        }


    }

  return (
    <>
        <AdminNavbar />

        <div className="container mt-5">
          <h3>Delete Appointment</h3>
          <br/>
        <form className="row g-3">

          <div className="col-md-3">
            <label for="Appointment" className="form-label">
              Appointment Id
            </label>
            <input
              type="text"
              className='form-control'
              value={apptId}
              onChange={(e) => setApptId(e.target.value)}
              placeholder="Select Id"
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-danger" onClick={deleteAppointment}>
              Delete Appointment
            </button>
          </div>

        </form>
        </div>
    </>
  )
}

export default DeleteAppointment
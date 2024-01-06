import React, { useState } from 'react'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function AdminDeletePatient() {

    const [patId, setPatId] = useState(0);

    const deletePatient = e => {
        e.preventDefault();

        if (patId === 0) {
            
            alert("Patient ID cannot be empty");
            
          } else {

              axios.delete(server_url + `/alphahealth/deletePatient/${patId}`)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Patient Deleted.");
                        setPatId("");
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
          <h3>Delete Patient</h3>
          <br/>
        <form className="row g-3">

          <div className="col-md-3">
            <label for="Appointment" className="form-label">
              Patient Id
            </label>
            <input
              type="text"
              className='form-control'
              value={patId}
              onChange={(e) => setPatId(e.target.value)}
              placeholder="Patient Id"
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-danger" onClick={deletePatient}>
              Delete Patient
            </button>
          </div>

        </form>
        </div>
    </>
  )
}

export default AdminDeletePatient
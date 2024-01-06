import React, { useState } from 'react'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function AdminDeleteDoctor() {

    const [docId, setDocId] = useState(0);

    const deleteDoctor = e => {
        e.preventDefault();

        if (docId === 0) {
            
            alert("Doctor ID cannot be empty");
            
          } else {

              axios.delete(server_url + `/alphahealth/deleteDoctor/${docId}`)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Doctor Deleted.");
                        setDocId("");
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
          <h3>Delete Doctor</h3>
          <br/>
        <form className="row g-3">

          <div className="col-md-3">
            <label for="Appointment" className="form-label">
              Doctor Id
            </label>
            <input
              type="text"
              className='form-control'
              value={docId}
              onChange={(e) => setDocId(e.target.value)}
              placeholder="Doctor Id"
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-danger" onClick={deleteDoctor}>
              Delete Doctor
            </button>
          </div>

        </form>
        </div>
    </>
  )
}

export default AdminDeleteDoctor
import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import server_url from "../../utils";

function AddAdmin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = e => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert("One or more required fields are empty!");
        }

            
        else {
              const payload = {
                username: username,
                password: password,
              }

              axios.post(server_url + '/alphahealth/addAdmin',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert("Admin already exists");
                    } else {
                        alert("Registration successful");
                        setUsername("");
                        setPassword("");

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
        <form className="row g-3">
          <h3>Admin Register</h3>
          <div className="col-md-6">
          <label for="Username" className="form-label">
              Username
            </label>
            <input
                type="text"
                className='form-control'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
          </div>
          <div className="col-md-6">
          <label for="Password" className="form-label">
              Password
            </label>
            <input
                type="password"
                className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={register}>
              Add Admin
            </button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default AddAdmin
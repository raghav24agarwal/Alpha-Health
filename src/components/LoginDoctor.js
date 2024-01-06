import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import server_url from "../utils";

function LoginDoctor() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [appointments, setAppointments] = useState([]);

    let navigate = useNavigate();

    const logIn = e => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert("One or more field is empty!");
            
          } 
          else {
            const payload = {
              username: username,
              password: password
            }
  
            axios.post( server_url + '/alphahealth/authDoctor',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Login Successful.");
                        setLoggedIn(true);

                    }
                // console.log(res)
                             
                })
                .catch((err) => {
                alert("Server Error, please try again!!")
                })

                axios.get(server_url + `/alphahealth/doctorAllAppointments/${username}`)
                .then((res) => {
                  console.log(res)
                        const alreadyExists = res["data"].hasOwnProperty('error');
                        if(alreadyExists) {
                            alert(res["data"]["error"]);
                        } else {
                            
                            setLoggedIn(true);
                            setAppointments(res["data"]);
                        }
                })
                .catch((err) => {
                  alert("Server Error, please try again!!")
                  })
  
    }}

  return (
    <>
    <Navbar />

    {loggedIn ? 
    <div className="container mt-5">
    <h3>My Appointments</h3>
    <br/>
  <ul>
    {appointments.map(appt => (
      <li key={appt.id}>Appointment Id - {appt.id}. <br></br>You have an appointment for {appt.date} at {appt.time}.
      <br></br>Short Description - {appt.description}</li>
    ))}
  </ul>
    <br/>
  <div className="text-center">
      
        Please reach out to Admin to create, update or delete any appointment.
        
    </div>

  </div>
  

 :


      <div className="container mt-5">
        <form className="row g-3">
          <h3>Doctor Login</h3>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
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
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
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
            <button type="submit" className="btn btn-success" onClick={logIn}>
              Log In
            </button>
          </div>
          <div className="text-center">
            <span className="nav-link active">
              Not having credentials ? Please contact Admin to create your account.
            </span>
          </div>
        </form>
      </div>

}
    </>
  )
}

export default LoginDoctor
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import server_url from "../utils";

function Home() {

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
  
            axios.post(server_url + '/alphahealth/authPatient',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Login Successful.");
                        setLoggedIn(true);
 

                        // let path = '/patient/appointment/all'; 
                        // navigate(path, {state: {username:username}});
                        
                    }
                // console.log(res)
                             
                })
                .catch((err) => {
                alert("Server Error, please try again!!")
                })

            axios.get(server_url + `/alphahealth/patientAllAppointments/${username}`)
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
            <li key={appt.id}>Appointment Id - {appt.id}. <br></br>You have booked an appointment for {appt.date} at {appt.time}.
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
          <h3>Patient Login</h3>
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
              Not a member ? &nbsp;
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>

}
    </>
  );
}

export default Home;

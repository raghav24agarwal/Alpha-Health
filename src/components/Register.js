import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import axios from 'axios';
import server_url from "../utils";

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail]       = useState("");
    const [address, setAddress]   = useState("");
    const [phone, setPhone]       = useState("");
    const [gender, setGender]     = useState("");
    const [age, setAge]           = useState("");

    let navigate = useNavigate(); 

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const register = e => {
        e.preventDefault();

        if (username === '' || fullname === '' || email === '' || password === '' || gender === '' || age === '' || phone === '' || address === '') {
            alert("One or more required fields are empty!");
        }

        else if (!isValidEmail(email)) {
          alert("Enter correct mail");
            
          } else {
              const payload = {
                username: username,
                fullname: fullname,
                email: email,
                password: password,
                address: address,
                phone: phone,
                gender: gender,
                age: age
              }

              axios.post(server_url + '/alphahealth/addPatient',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert("Patient already exists");
                    } else {
                        alert("Registration successful");
                        let path = '/patient/appointment/all'; 
                        navigate(path, {state: {username:username}});

                        setUsername("");
                        setPassword("");
                        setFullname("");
                        setEmail("");
                        setAddress("");
                        setPhone("");
                        setGender("");
                        setAge("");
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
      <Navbar />

      <div className="container mt-5">
        <form className="row g-3">
          <h3>Patient Register</h3>
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
          <div className="col-md-6">
          <label for="Fullname" className="form-label">
              Full Name
            </label>
            <input
                type="text"
                className='form-control'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name"
                required
              />
          </div>
          <div className="col-md-6">
          <label for="Email" className="form-label">
              Email
            </label>
            <input
                type="email"
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
          </div>
          <div className="col-12">
          <label for="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className='form-control'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="col-md-6">
            <label for="Phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className='form-control'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="col-md-4">
            <label for="Gender" className="form-label">
              Gender
            </label>
            <select id="inputState" className="form-select" value={gender}
              onChange={(e) => setGender(e.target.value)} placeholder="Gender">
                <option value="" disabled selected>Select gender</option>
              <option >Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="Age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              required
            />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-success" onClick={register}>
              Register
            </button>
          </div>
          <div className="text-center">
            <span className="nav-link active">
              Already a member ? &nbsp;
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

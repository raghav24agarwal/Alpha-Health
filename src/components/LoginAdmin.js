import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar'
import { useDispatch } from "react-redux";
import { userActions } from '../store/index';
import server_url from "../utils";

function LoginAdmin() {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
  
            axios.post(server_url + '/alphahealth/authAdmin',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Login Successful.");
                        let path = '/admin/appointment/create'; 
                        navigate(path, {state: {username:username}});

                        dispatch(userActions.userDetails({
                          'username': res.data['username']
                        }))

                    }
                // console.log(res)
                             
                })
                .catch((err) => {
                alert("Server Error, please try again!!")
                })
  
    }}

  return (
    <>
    <Navbar />
      <div className="container mt-5">
        <form className="row g-3">
          <h3>Admin Login</h3>
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
    </>
  )
}

export default LoginAdmin
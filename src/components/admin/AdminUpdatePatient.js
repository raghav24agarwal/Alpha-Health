import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function AdminUpdatePatient() {


    const [fullname, setFullname] = useState("");
    const [email, setEmail]       = useState("");
    const [address, setAddress]   = useState("");
    const [phone, setPhone]       = useState("");
    const [gender, setGender]     = useState("");
    const [age, setAge]           = useState("");
    const [patId, setPatId]       = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const updatePatient = e => {
        e.preventDefault();

        if (fullname === '' || email === '' || gender === '' || age === '' || phone === '' || address === '') {
            alert("One or more required fields are empty!");
        }

        else if (!isValidEmail(email)) {
          alert("Enter correct mail");
            
          } else {
              const payload = {
                fullname: fullname,
                email: email,
                address: address,
                phone: phone,
                gender: gender,
                age: age
              }

              axios.patch(server_url + `/alphahealth/updatePatient/${patId}` ,payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert("Patient doesn't exists");
                    } else {
                        alert("Patient Updated");
                        setFullname("");
                        setEmail("");
                        setAddress("");
                        setPhone("");
                        setGender("");
                        setAge("");
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
          <h3>Update Patient</h3>
          <br/>
        <form className="row g-3">
          <div className="col-md-6">
          <label for="PatientNames" className="form-label">
            Fullname
            </label>
            <input
              type="text"
              className='form-control'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Fullname"
              required
            />
          </div>

          <div className="col-md-6">
          <label for="DoctorNames" className="form-label">
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

          <div className="col-md-2">
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

          <div className="col-md-4">
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
          <div className="col-md-3">
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
          <div className="col-md-3">
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

          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={updatePatient}>
              Update Patient
            </button>
          </div>

        </form>
        </div>


    </>
  )

}

export default AdminUpdatePatient
import React, { useState } from "react";
import axios from 'axios';
import AdminNavbar from "./AdminNavbar";
import server_url from "../../utils";

function AdminUpdateDoctor() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail]       = useState("");
    const [address, setAddress]   = useState("");
    const [phone, setPhone]       = useState("");
    const [specialization, setSpecialization] = useState("");
    const [fees, setFees]         = useState("");
    const [docId, setDocId]       = useState("");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

      const updateDoctor = e => {
        e.preventDefault();

        if (fullname === '' || email === '' || specialization === '' || fees === '' || phone === '' || address === '') {
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
                specialization: specialization,
                fees: fees
              }

              axios.patch(server_url + `/alphahealth/updateDoctor/${docId}` ,payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert("Doctor doesn't exists");
                    } else {
                        alert("Doctor Updated");
                        setFullname("");
                        setEmail("");
                        setAddress("");
                        setPhone("");
                        setSpecialization("");
                        setFees("");
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
        <form className="row g-3">
          <h3>Update Doctor</h3>
          <br/>
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
          <div className="col-md-2">
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
          <div className="col-md-4">
            <label for="specialization" className="form-label">
              Specialization
            </label>
            <input
              type="text"
              className='form-control'
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              placeholder="Specialization"
            />
          </div>
          <div className="col-md-2">
            <label for="fees" className="form-label">
              Fees
            </label>
            <input
              type="number"
              className='form-control'
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="Fees"
              required
            />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={updateDoctor}>
              Update Doctor
            </button>
          </div>
          
        </form>
      </div>
    </>
  )
}

export default AdminUpdateDoctor
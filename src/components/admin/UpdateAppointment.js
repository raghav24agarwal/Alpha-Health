import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function UpdateAppointment() {

    const [allDoctors, setAllDoctors] = useState([]);
    const [allPatients, setAllPatients] = useState([]);

    const [doctor, setDoctor] = useState("");
    const [patient, setPatient] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [apptId, setApptId] = useState(0);

    useEffect(() => {
        axios.get(server_url + '/alphahealth/allPatients').then(response => {
            console.log(response)

            setAllPatients(response.data);

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });


        axios.get(server_url + '/alphahealth/allDoctors').then(response => {
            console.log(response)

            setAllDoctors(response.data);

        }).catch((err) => {
          alert("Server Error, Please try again!")
        });


    }, []);

    const updateAppointment = e => {
        e.preventDefault();

        if (patient === '' || doctor === '' || date === '' || time === '' || status === '' || apptId === 0) {
            console.log(patient, doctor, date, time, status);
            alert("One or more required fields are empty!");
            
          } else {

            console.log(patient, doctor)
              const payload = {
                apptId: apptId,
                patient: patient,
                doctor: doctor,
                status: status,
                date: date,
                time: time,
                description: description
              }

              axios.patch(server_url + `/alphahealth/updateAppointment/${apptId}` ,payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Updated Appointment");
                        setApptId("")
                        setPatient("");
                        setDoctor("");
                        setStatus("");
                        setDate("");
                        setTime("");
                        setDescription("");
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
          <h3>Update Appointment</h3>
          <br/>
        <form className="row g-3">
          <div className="col-md-6">
          <label for="PatientNames" className="form-label">
            Patients
            </label>
            <select id="patient" className="form-select" value={patient}
              onChange={(e) => setPatient(e.target.value)} placeholder="Patient" required>
                <option value="" disabled selected>Select a patient</option>
              {allPatients.map(pat => (
            <option value={pat.id}>{pat.fullname}</option>
          ))}
            </select>
          </div>

          <div className="col-md-6">
          <label for="DoctorNames" className="form-label">
              Doctors
            </label>
            <select id="doctor" className="form-select" value={doctor}
              onChange={(e) => setDoctor(e.target.value)} placeholder="Doctor" required>
                <option value="" disabled selected>Select a doctor</option>
              {allDoctors.map(doc => (
            <option value={doc.id}>{doc.fullname}</option>
          ))}
            </select>
          </div>

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

          <div className="col-md-3">
            <label for="Status" className="form-label">
              Status
            </label>
            <select id="Status" className="form-select" value={status}
              onChange={(e) => setStatus(e.target.value)} placeholder="Status" required>
                <option value="" disabled selected>Select status</option>
              <option>New</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="col-md-3">
            <label for="Date" className="form-label">
              Select Date
            </label>
            <input
              type="date"
              className='form-control'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select date"
              required
            />
          </div>
          <div className="col-md-3">
            <label for="Time" className="form-label">
              Select Time
            </label>
            <input
              type="time"
              className='form-control'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Select time"
              required
            />
          </div>

          <div className="col-12">
          <label for="Description" className="form-label">
              Short Description
            </label>
            <input
              type="text"
              className='form-control'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={updateAppointment}>
              Update Appointment
            </button>
          </div>

        </form>
        </div>


    </>
  )
}

export default UpdateAppointment
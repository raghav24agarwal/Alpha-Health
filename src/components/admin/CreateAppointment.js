import React , { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import server_url from "../../utils";

function CreateAppointment() {

    const [allDoctors, setAllDoctors] = useState([]);
    const [allPatients, setAllPatients] = useState([]);

    const [doctor, setDoctor] = useState("");
    const [patient, setPatient] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

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

    const bookAppointment = e => {
        e.preventDefault();

        if (patient === '' || doctor === '' || date === '' || time === '' || status === '') {
            console.log(patient, doctor, date, time, status);
            alert("One or more required fields are empty!");
            
          } else {

            console.log(patient, doctor)
              const payload = {
                patient: patient,
                doctor: doctor,
                status: status,
                date: date,
                time: time,
                description: description
              }

              axios.post(server_url + '/alphahealth/addAppointment',payload)
                .then((res) => {
                    console.log(res)
                    const alreadyExists = res["data"].hasOwnProperty('error');
                    if(alreadyExists) {
                        alert(res["data"]["error"]);
                    } else {
                        alert("Appointment Booked");
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
          <h3>Create an Appointment</h3>
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

          <div className="col-md-6">
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
          <div className="col-md-4">
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
          <div className="col-md-2">
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
            <button type="submit" className="btn btn-primary" onClick={bookAppointment}>
              Book Appointment
            </button>
          </div>

        </form>
        </div>



    </>
  )
}

export default CreateAppointment
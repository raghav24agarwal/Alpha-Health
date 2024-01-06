import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from './components/Home';
import Register from './components/Register';

import CreateAppointment from './components/admin/CreateAppointment';
import AllAppointments from './components/admin/AllAppointments';
import UpdateAppointment from './components/admin/UpdateAppointment';
import DeleteAppointment from './components/admin/DeleteAppointment';

import AdminAddDoctor from './components/admin/AdminAddDoctor';
import AdminAllDoctors from './components/admin/AdminAllDoctors';
import AdminUpdateDoctor from './components/admin/AdminUpdateDoctor';
import AdminDeleteDoctor from './components/admin/AdminDeleteDoctor';

import AdminAddPatient from './components/admin/AdminAddPatient';
import AdminAllPatients from './components/admin/AdminAllPatients';
import AdminUpdatePatient from './components/admin/AdminUpdatePatient';
import AdminDeletePatient from './components/admin/AdminDeletePatient';

import LoginDoctor from './components/LoginDoctor';
import UpdateAppointmentDenied from './components/UpdateAppointmentDenied';
import LoginAdmin from './components/LoginAdmin';
import PrivateRoute from './components/PrivateRoute';
import AddAdmin from './components/admin/AddAdmin';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient/appointment/all" element={<Home />} />
        <Route path="/patient/appointment/update" element={<UpdateAppointmentDenied />} />

        <Route path="/doctor/login" element={<LoginDoctor />} />
        <Route path='/doctor/appointment/all' element={<LoginDoctor />} />
        <Route path='/doctor/appointment/update' element={<UpdateAppointmentDenied />} />

        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/create" element={<PrivateRoute > <AddAdmin /> </PrivateRoute> } />



        <Route path="/admin/appointment/all" element={
          <PrivateRoute >
            <AllAppointments />
            </PrivateRoute>} />
        <Route path="/admin/appointment/create" element={<PrivateRoute ><CreateAppointment /></PrivateRoute>} />
        <Route path="/admin/appointment/delete" element={<PrivateRoute ><DeleteAppointment /></PrivateRoute>} />
        <Route path="/admin/appointment/update" element={<PrivateRoute ><UpdateAppointment /></PrivateRoute>} />


        <Route path="/admin/patient/create" element={<PrivateRoute ><AdminAddPatient /></PrivateRoute>} />
        <Route path="/admin/patient/all" element={<PrivateRoute ><AdminAllPatients /></PrivateRoute>} />
        <Route path="/admin/patient/update" element={<PrivateRoute ><AdminUpdatePatient /></PrivateRoute>} />
        <Route path="/admin/patient/delete" element={<PrivateRoute ><AdminDeletePatient /></PrivateRoute>} />

        <Route path="/admin/doctor/create" element={<PrivateRoute ><AdminAddDoctor /></PrivateRoute>} />
        <Route path="/admin/doctor/all" element={<PrivateRoute ><AdminAllDoctors /></PrivateRoute>} />
        <Route path="/admin/doctor/update" element={<PrivateRoute ><AdminUpdateDoctor /></PrivateRoute>} />
        <Route path="/admin/doctor/delete" element={<PrivateRoute ><AdminDeleteDoctor /></PrivateRoute>} />

        <Route path="*" element={
          <Navigate to="/" />
        }/>
        
      </Routes>
      
    </>
  );
}

export default App;

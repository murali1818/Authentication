import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Login from './components/layouts/Login';
import Admin from './components/Admin/Admin';
import React, {  } from 'react';
import Profile from './components/users/Profile';
import Home from './components/Home';
import './App.css'
import ForgotPassword from './components/layouts/ForgotPassword';
import ResetPassword from './components/layouts/ResetPassword';
function App() {

  return (
    <> 
      <div className="App">
        <Router>
        <Header/>
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin></Admin>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/myprofile' element={<Profile/>} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

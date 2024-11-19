import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from "./components/NavBar";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ClaimSubmission from './components/ClaimSubmission';
import ClinicLocator from './components/ClinicLocator'
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <Router>
      <Chatbot />
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/homepage' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/claim' element={<ClaimSubmission/>} />
        <Route path='/locator' element={<ClinicLocator/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
  );
};

export default App;

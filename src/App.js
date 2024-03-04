import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componets/Login';
import Dashbord from './componets/Dashbord/Dashbord';
import Profile from './componets/Profile/Profile';
import Container1 from './componets/Dashbord/Container1';

function App() {
  return (
    <div>
    <Router>
      <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashbord" element={<Dashbord/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Container' element={<Container1/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;





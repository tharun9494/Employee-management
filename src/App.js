import React from'react';


import{BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from './components/Dashbord/Dashboard';
import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileForm from './components/Profile/ProfileForm';
import CalenderContainer from './components/Leave/CalenderContainer';
import HR from './components/HR';

import EditContainer from './components/Leave/EditContainer';
import Login from './components/Login';
import Bar from './components/Bar';
import Navbar from './components/Navbar';





const App = () => {
  return (
    <div className='bg-[#E3F2FD]'>
    <Router className='bg-[#E3F2FD]'>
      <div className="app-container">
        <div className="left-container">  
          
        </div>
        <div className='bg-[#E3F2FD]'></div>
      <Navbar />

          <Route path="/Bar" component={Bar} />
          <Route path="/Dashboard" component={Dashboard} className='bg-[#E3F2FD]'/>
          <Route path="/profile" component={ProfileContainer} className='bg-[#E3F2FD]' />
          <Route path="/ProfileForm" component={ProfileForm} className='bg-[#E3F2FD]'/>
          <Route path="/leave" component={CalenderContainer} />
          <Route path="/editdetails" component={EditContainer} />
          <Route path="/hr" component={HR} />
          <Route path="/Login" component={Login} />

          
          
           {/* Define the route for the profile page */}
          {/* Add routes for other components/pages here */}
      </div>
    </Router>
    </div>
  );
};

export default App;
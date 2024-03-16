import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ProfileContainer from '../components/Profile/ProfileContainer';
import CalenderContainer from '../components/Leave/CalenderContainer';
import Dashboard from '../components/Dashbord/Dashboard';
import HR from '../components/HR';



import a from "../components/Profile/images/Alarm.png";
import b from"../components/Profile/images/Male User.png";
import c from"../components/Profile/images/Communicate.png";

import '../App.css';


const Navbar = () => {
  const [showProfileContainer, setShowProfileContainer] = useState(false);
  const [showCalenderContainer, setShowCalenderContainer] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showHR, setShowHR] = useState(false);
 

  // eslint-disable-next-line
  const handleProfileClick = () => {
    setShowProfileContainer(prevState => !prevState);
    setShowCalenderContainer(false);
    setShowDashboard(false);
    setShowHR(false)
    
  };

  const handleLeaveClick = () => {
    setShowCalenderContainer(prevState => !prevState);
    setShowProfileContainer(false);
    setShowDashboard(false);
    setShowHR(false)
    
  };
  const handleNavbarClick = () => {
    setShowProfileContainer(false); // Close the ProfileContainer
    setShowCalenderContainer(false);
    setShowDashboard(false);
    setShowHR(false)
     // Close the CalenderContainer
  };
  const handleDashboardClick = () => {
    setShowProfileContainer(false);
    setShowCalenderContainer(false);
    setShowDashboard(prevState => !prevState);
    setShowHR(false)
    
  };
  const handleHRClick = () => {
    setShowProfileContainer(false);
    setShowCalenderContainer(false);
    setShowDashboard(false);
    setShowHR(prevState => !prevState)
    
  };


  return (
    <div className="navbar" onClick={handleNavbarClick}>
      <div className="border-2 border-[#FF858D] py-2 px-4 mx-56 my-4 rounded-full items-center">
        <ul className="flex flex-row text-[#F71735] items-center justify-around">
          <Link to="/Dashboard" onClick={handleDashboardClick}>Dashboard</Link>
          <Link to="/hr" onclick={handleHRClick}>HR</Link>
          <Link to="/time"><li>Time</li></Link>
          <Link to="/leave" onClick={handleLeaveClick}>Leave</Link>
          <Link to="/profile" onClick={handleProfileClick}>Profile</Link>
          <li> <img src={b} alt ='Male user' style={{height:'75%' ,width:'50%'}}></img> </li>
          <li><img src= {c} alt='communicate' style={{height:'75%' ,width:'50%'}}></img></li>
          <li><img src= {a} alt ='c' style={{height:'75%' ,width:'50%'}}></img> </li>
          {/* Add other icons */}
        </ul>
      </div>
      {showProfileContainer && <ProfileContainer />}
      {showCalenderContainer && <CalenderContainer />}
      {showDashboard && <Dashboard />}
      {showHR && <HR />}
    </div>
  );
}

export default Navbar;

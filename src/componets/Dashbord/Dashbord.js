import React, { useState } from 'react';
import'./Dashbord.css';
import Navbar from '../Navbar';
import Pichart from'./Pichart'
import Container from "@mui/material/Container"; 
const Dashbord = () => {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(date.toLocaleTimeString());
  const [weather, setWeather] = useState('Sunny');

  const updateDate = () => {
    setDate(new Date());
    setTime(date.toLocaleTimeString());
  };

  const updateWeather = () => {
    // Fetch the weather data from an API
    setWeather('Cloudy');
  };


  return (
    <div >
    <Navbar/> 
  
    <div style = {{display: "flex"}}>
        <Container fixed>
          <div style = {{  height: "20rem", width: "30%" }}>
          <div className="Date" style={{padding:50}}>
          <h1>Date: {date.toLocaleDateString()}</h1>
          <h2>Time: {time}</h2>
          <h3>Weather: {weather}</h3>
          </div> 
      </div>
        </Container>

     <Container fixed>
     <section className="content-area-cards" style={{}}>
     <Container fixed>
      <Pichart
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Annual leave",
          value: "Remaining - 3",
          text: "We have sold 123 items.",
        }}
      />
      </Container>

      <Container fixed>
      <Pichart
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Sick leave",
          value: "$8.2K",
          text: "Available to payout",
        }}
      /></Container>

      <Container fixed> 
      <Pichart
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Unpaid Leave",
          value: "$18.2K",
          text: "Available to payout",
        }}
      /><br/>
      </Container>
      
      <Container fixed>
      <Pichart
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Special Leave ",
          value: "$18.2K",
          text: "Available to payout",
        }}
      />
      </Container>

    </section>
     </Container>
     </div>
     

    </div>
  );
};

export default Dashbord;

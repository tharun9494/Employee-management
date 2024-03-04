import React from 'react'
import Navbar from '../Navbar'
import Container from "@mui/material/Container";
function Profile() {
  return (
    <div>
      <Navbar/>
      <Container maxWidth = "xs">
            <div style = {{ backgroundColor: "lightgreen", height: "30rem" ,width:"40rem" }}> Hello </div>
         </Container>

    </div>
  )
}

export default Profile

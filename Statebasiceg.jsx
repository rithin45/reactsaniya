import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasiceg = () => {
    var[name,setName]=useState("")
    const ChangeName=()=>{
        setName("Homepage")
    }
    const changeName=()=>{
        setName("Gallery")
    }

const changegName=()=>{
        setName("Contact")
    }
  return (
    <div style={{padding:'80px'}}>
        <Typography variant='h5'> Welcome to {name}</Typography>
    
        <Button variant='contained' color='success'onClick={changeName}>Homepage</Button>
        <Button variant='contained' color='error'onClick={changeName}>Gallery</Button>
        
      
    </div>
  )
}

export default Statebasiceg


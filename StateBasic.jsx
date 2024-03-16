import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {

    var[name,setname]=useState("class")
    const ChangeName=()=>{
        console.log('clicked')
        setname("saniya")
    }
  return (
    <div styl={{paddingTop:"80px"}}>
        <Typography variant='h4'>welcome:{name}</Typography>
        <TextField variant='outlined' label='Enter text'/>
        <Button variant='contained' color='error'
        onClick={ChangeName}>Change</Button>
      
    </div>
  )
}

export default StateBasic
 

import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,Setcount]=useState(0)
const incBtn=()=>{

    Setcount(count+1)
}

const decBtn=()=>{
    if (count==0) {
        Setcount(count=0)

        
    }
    else{
        

    
    Setcount(count-1)
    }
}


    


  return (
    <div style={{paddingTop:"80px"}}>
        <Typography variant='h3'>Counter value:{count}</Typography>
        <Button variant='contained' color='success' onClick={incBtn}>+</Button>&nbsp;
        <Button variant='contained' color='error' onClick={decBtn}>-</Button>
      
    </div>
  )
}

export default Counter

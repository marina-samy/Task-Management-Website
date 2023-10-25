import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Timer({duration}) {
    const [time, setTime] = useState(new Date());


    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000)
        }, 1000)
    }, [time])
  
  
    const getFormatedTime = (millisec) =>{
        let total_seconds = parseInt(Math.floor(millisec / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 24));
        
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${hours} : ${minutes} : ${seconds}`
    }
  return (
    <div className='fw-light ' style={{fontSize: 14}}>{getFormatedTime(time)}</div> 
    
  )
}

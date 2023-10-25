import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function TimeLoader() {
    const [time,setTime]= useState(0)
    const [running, setRunning]= useState(true)

    const timer= useRef()

    const format = (time) =>{
        let hours = Math.floor(time / 60 / 60 % 24)
        let minutes = Math.floor(time / 60 % 60 )
        let seconds = Math.floor(time % 60)

        hours = hours < 10 ? '0' + hours : hours
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        return hours + ":" + minutes + ":" + seconds
    }

    useEffect(()=>{
        if(running) {
            timer.current = setInterval(() =>{
                setTime(pre => pre + 1)
            }, 1000)
        }
    }, [running])
  return (
    <div className='stopWatch m-5 py-3 text-center' style={{position: 'absolute', right: '30px'}}>
    <p className='timer'>{format(time)}</p>
    <div className='actions'>
    <button className='me-3' onClick={() => setTime(0)}>Restart</button>
    <button onClick={() => {
        if(running) clearInterval(timer.current)
        setRunning(!running)
    }}>{ running ? 'stop' : 'resume' }</button>
    </div>
    </div>
  )
}

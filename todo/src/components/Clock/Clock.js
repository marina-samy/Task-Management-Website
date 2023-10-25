import React from 'react'
import "./Clock.css"

export default function Clock() {
    
    
    setInterval(() => {
        let hours = document.getElementById('hours');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ampm = document.getElementById('ampm');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
    
    let hr = document.querySelector('.dot_hr');
    let mins = document.querySelector('.dot_min');
    let secs = document.querySelector('.dot_sec');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    
    // convert 24 hr clock to 12 hr clock
    
    if (h > 12){
        h = h-12;
    }
    
    
    //adding zero before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    min.innerHTML = m + "<br><span>Minutes</span>";
    sec.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am;
    
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12 hours
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 min
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 sec
    
    hr.style.transform = `rotate(${h * 30}deg)`;
    // 360/ 12 = 30
    mins.style.transform = `rotate(${m * 6}deg)`;
    // 360/ 60 = 6
    secs.style.transform = `rotate(${s * 6}deg)`;
    // 360/ 60 = 6
    
    
    })
    
    










  return (
    <>
    <div id="time" >
            <div className="circle" style={{"--clr" : "#e92264"}} >
                <div class="dots dot_hr"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="hh"></circle>
                </svg>
                <div id="hours">00</div>
            </div>
            <div className="circle" style={{"--clr" : "rgb(29, 223, 207)"}} >
                <div class="dots dot_min"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="mm"></circle>
                </svg>
                <div id="min">00</div>
            </div>
            <div className="circle" style={{"--clr" : "#eaff29"}}>
                <div class="dots dot_sec"></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="ss"></circle>
                </svg>
                <div id="sec">00</div>
            </div>
            <div class="ap">
                <div id="ampm">Am</div>
            </div>


            
        </div>

    </>
  )
}

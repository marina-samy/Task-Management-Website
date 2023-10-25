import React, { useEffect, useState } from 'react';
import './Welcome.css';

export default function Welcome() {

  const[onload,setLoad] = useState(false);

  useEffect(() => {
    const hasVisitedBefore = sessionStorage.getItem('hasVisited');

    if (!hasVisitedBefore) {
      // Display the alert
      setLoad(true);
      // Set the flag in local storage
      sessionStorage.setItem('hasVisited', true);
    }
  }, []);


  return (
    <div>
    <div id="container" onLoad={setLoad} style={{"display": onload ? "flex" : "none"}}>
  <div id="success-box">
    <div className="dot"></div>
    <div className="dot two"></div>
    <div className="face">
      <div className="eye"></div>
      <div className="eye right"></div>
      <div className="mouth happy"></div>
    </div>
    <div className="shadow scale"></div>
    <div className="message"><h1 class="alert"> Hiiii <br /> <br /> Have a good day !</h1>
    
    </div>
    <button className="button-box"><h1 class="green" onClick={() => setLoad(!onload)}>continue</h1></button>
  </div>
   {/* <div id="Coffee-break">
    <div class="dot"></div>
    <div class="dot two"></div>
    <div class="face2">
      <div class="eye"></div>
      <div class="eye right"></div>
      <div class="mouth happy"></div>
    </div>
    <div class="shadow move"></div>
    <div class="message"><h1 class="alert">Error!</h1><p>oh no, something went wrong. </p></div>
    <button class="button-box"><h1 class="red">try again</h1></button>
  </div>  */}
</div>


</div>
  )
}

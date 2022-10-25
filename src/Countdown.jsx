
import React, { useState, useEffect } from 'react';
import isHalloween from './EasterEggs';


function Countdown({ end }) {

  const [ time, setTime ] = useState(Date.now());

  var videoSrc, videoLen, videoTick;

  if(isHalloween()) {
    videoSrc = "countdown-scream-grey.mp4";
    videoLen = 32;
    videoTick = 1020;
  } else {
    videoSrc = "countdown.mp4";
    videoLen = 32;
    videoTick = 1020;
  }

  var realrem = Math.ceil((end - time) / videoTick); // Some videos don't tick down every 1000 ms :-|

  var rem = Math.max(0, realrem);

  var mins = (Math.floor(rem / 60)).toString().padStart(2, '0');
  var secs = (rem % 60).toString().padStart(2, '0');

  var tick = realrem >= -1 ? 250 : 30000;


  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(Date.now());
    }, tick);
  });

  const clockActive = realrem >= 0 && realrem < videoLen;

  console.log("Remaining (real) ", rem, realrem, "clockActive", clockActive);

  useEffect(() => {
    const video = document.querySelector('video');
    //console.log(video);
    if(video == null) return;
    if(clockActive) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  })

  const clock = <>
      <video end={end} width="800" height="600" controls autoPlay={false} className={clockActive ? "clock active" : "clock inactive"}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </>

    return (
      <div className="Countdown">
        <span className="timer">{mins} : {secs}</span>
        {clock}
      </div>
    );
}

export default Countdown;

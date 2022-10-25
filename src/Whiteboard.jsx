import React, { useState, useEffect } from 'react';

import isHalloween from './EasterEggs';

import './fly.css'

function Whiteboard({}) {

  useEffect(() => {
    const video = document.querySelector('audio');
    //console.log(video);
    if(video == null) return;
    video.play();

    // Some pens



  })

  var info = {};

  if(isHalloween()) {
    info = {
      object: 'ghost.png',
      sound: 'phantom.ogg',
      bg: 'sarahs_whiteboard_doom.png'
    }
  } else {
    info = {
      object: 'pen.png',
      sound: 'swhiteboard.m4a',
      bg: 'sarahs_whiteboard.png'
    }
  }


    return (
      <div className="whiteboard">
        <div id="pens">
          <img src={info.object} />
        </div>
        <audio controls autoPlay={false}>
          <source src={info.sound} type="audio/mp4" />
        </audio>
        <img src={info.bg} className="swhiteboard" />
      </div>
    );
}

export default Whiteboard;

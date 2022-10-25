import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Countdown from './Countdown';
import Whiteboard from './Whiteboard';
import isHalloween from './EasterEggs';

function App() {

    const [ mode, setMode ] = useState('welcome');

    const [ cdtime, setCdtime ] = useState(0);

    var c;

    switch(mode) {
      case 'timer':
        c = <>
          <div class="timebuttons">
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 30); }}>30:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 25); }}>25:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 20); }}>20:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 14); }}>14:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 10); }}>10:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 6); }}>06:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 4); }}>04:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 60 * 1000 * 2); }}>02:00</button>
          <button onClick={ () => { setCdtime(Date.now() + 38 * 1000); }}>00:38</button>
          </div>
          <Countdown end={ cdtime } />
        </>
        break;

      case 'plenary':
        c = <Whiteboard />
        break;

      default:
          c = <>
            <textarea class="big">Welcome</textarea>
            <textarea class="sub">Please sit in your workshop groups. Let us know if you haven't been assigned to one.</textarea>
          </>;
          break;

    }

    var ee = <></>;

    if(isHalloween()) {
      ee = <><img src="pumpkin.png" className="bottom swingimage" /><img src="cobweb.svg" className="top" style={{opacity: 0.6}} /></>
    }

  return (
    <div className="App">
      <header className="header">
        <button onClick={() => { setMode('welcome') }}>Welcome</button>
        <button onClick={() => { setMode('timer') }}>Timer</button>
        <button onClick={() => { setMode('plenary') }}>Plenary</button>
      </header>

      <div className="content">
        {c}
        <div className="easteregg">
          {ee}
        </div>
      </div>

    </div>
  );
}

export default App;

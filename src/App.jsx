import React, { useState } from 'react';
import Asteroids from './components/Asteroids';
import StartScreen from './components/StartScreen';

function App() {
  const [showGame, setShowGame] = useState(false);
  function handleStart() {
    setShowGame(true);
  }
  function handleEnd() {
    setShowGame(false);
  }

  return (
    <div className="App">
      {showGame ? ( 
        <Asteroids onEnd={handleEnd} /> 
      ) : ( 
        <StartScreen onStart={handleStart}/> 
      )}
      
       {/* <Asteroids /> */}
    </div>
  )
};

export default App;
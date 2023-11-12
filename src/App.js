import React from "react"
import './App.css';


function App() {
  //variable represent milliseconds, and a function that sets the time
  const [time, setTime] = React.useState(0)
  //makes sure the timer is on and a time on function, false to represent the timer being off
  const [timerOn, turnTimeOn] = React.useState(false)
  
  //runs when the timer is on
  React.useEffect(() => {
    let interval = null;

  //10 represents hundreths of a second, prev time points to the previous time
  //this increases the time each 10 milliseconds prior to the present time
  //hence prev time ++10
  //the else statement clears the number when the timer stops NEED TO FIX
    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  
  }, [timerOn])
  
  return (
    
    //The first div shows the current time at the top.
    //The second shows the buttons.
    <div className="App">
      
      <div>{time}</div>

      <div>
        <button onClick={() => turnTimeOn(true)}>Start</button>
        <button onClick={() => turnTimeOn(false)}>Stop</button>
        <button onClick={() => turnTimeOn(true)}>Continue</button>
        <button onClick={() => setTime(0)}>Restart</button>
      </div>

    </div>
  );
}

export default App;

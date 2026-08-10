import {useState} from 'react'
import './App.css'
function App (){
  const [count,setCount]=
  useState (0) 
  return (
    <div>
    <h1> Training Coach App</h1>
    <p> Workouts logged: {count}</p>
      <button onClick={() => setCount (count + 1)} > Log a workout
         </button>
         </div>
  )
}
export default App

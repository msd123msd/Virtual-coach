import {useEffect, useState} from 'react'
import './App.css'
function App (){
  const [count,setCount]= useState (() => {

const saved = localStorage.getItem('workoutCount')
return saved ? Number(saved) :0

})
  
useEffect (() => {
  localStorage.setItem('workoutCount', count)
}, [count])

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

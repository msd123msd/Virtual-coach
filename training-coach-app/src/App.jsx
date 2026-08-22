import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts')
    return saved ? JSON.parse(saved) : []
  })
  const [workoutName, setWorkoutName] = useState('')

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])


  function addWorkout() {
    if (workoutName.trim() === '') return

    const newWorkout = {
      id: Date.now(),
      name: workoutName,
      date: new Date().toLocaleDateString()
    }

    setWorkouts([...workouts, newWorkout])
    setWorkoutName('')
  }

  function deleteWorkout (id) {
    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }

  return (
    <div>
      <h1>Training Coach App</h1>

      <input
        type="text"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        placeholder="Workout name"
      />
      <button onClick={addWorkout}>Add workout</button>

      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.name} — {workout.date}
            <button onClick={()=> deleteWorkout (workout.id)}> Detele Workout</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

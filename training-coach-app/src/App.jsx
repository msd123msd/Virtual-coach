import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts')
    return saved ? JSON.parse(saved) : []
  })
  const [workoutName, setWorkoutName] = useState('')
  const [workoutCategory, setWorkoutCategory] = useState('')


  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])


  function addWorkout() {
    if (workoutName.trim() === '') return

    const newWorkout = {
      id: Date.now(),
      name: workoutName,
      date: new Date().toLocaleDateString(),
      category: workoutCategory,
    }

    setWorkouts([...workouts, newWorkout])
    setWorkoutName('')
    setWorkoutCategory('')
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

      <select
  value={workoutCategory}
  onChange={(e) => setWorkoutCategory(e.target.value)}
      >
  <option value="">Select category</option>
  <option value="Strength">Strength</option>
  <option value="Run">Run</option>
  <option value="Indoor Cycle">Indoor Cycle</option>
  <option value="Outdoor Cycle">Outdoor Cycle</option>
  <option value="Yoga">Yoga</option>
      </select>

      <button onClick={addWorkout}>Add workout</button>



 <h2>Run</h2>
<ul>
  {workouts
    .filter((workout) => workout.category === "Run")
    .map((workout) => (
      <li key={workout.id}>
        {workout.category} — {workout.name} — {workout.date}
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </li>
    ))}
</ul>

 <h2>Indoor Cycle</h2>
<ul>
  {workouts
    .filter((workout) => workout.category === "Indoor Cycle")
    .map((workout) => (
      <li key={workout.id}>
        {workout.category} — {workout.name} — {workout.date}
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </li>
    ))}
</ul>

 <h2>Outdoor Cycle</h2>
<ul>
  {workouts
    .filter((workout) => workout.category === "Outdoor Cycle")
    .map((workout) => (
      <li key={workout.id}>
        {workout.category} — {workout.name} — {workout.date}
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </li>
    ))}
</ul>

 <h2>Strength</h2>
<ul>
  {workouts
    .filter((workout) => workout.category === "Strength")
    .map((workout) => (
      <li key={workout.id}>
        {workout.category} — {workout.name} — {workout.date}
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </li>
    ))}
</ul>

 <h2>Yoga</h2>
<ul>
  {workouts
    .filter((workout) => workout.category === "Yoga")
    .map((workout) => (
      <li key={workout.id}>
        {workout.category} — {workout.name} — {workout.date}
        <button onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
      </li>
    ))}
</ul>
    </div>
  )
}

export default App

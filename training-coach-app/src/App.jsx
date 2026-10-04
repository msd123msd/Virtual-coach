import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts')
    return saved ? JSON.parse(saved) : []
  })
  const [routes, setRoutes] = useState(() => {
    const saved = localStorage.getItem('routes')
    return saved ? JSON.parse(saved) : ["Stiglingh Loop", "School Loop", "Stiglingh Straits", "EDS KCC 10", "Polo Fields", "DBN Musgrave", "DBN Musgrave 2 Beach", "Rolling Essenwood"]
  })

  const [workoutName, setWorkoutName] = useState('')   
  const [workoutCategory, setWorkoutCategory] = useState('')
  const [workoutDistance, setWorkoutDistance] = useState('')
  const [workoutDuration, setWorkoutDuration] = useState('')
  const [workoutAvgHR, setWorkoutAvgHR] = useState('')
  const [workoutRoute, setWorkoutRoute] = useState('')
  const [workoutHRRecovery, setWorkoutHRRecovery] = useState('')
  const [workoutHRDrop, setWorkoutHRDrop] = useState('')
  const [workoutRPE, setWorkoutRPE] = useState('')
  const categories = ['Strength', 'Run', 'Indoor Cycle', 'Outdoor Cycle', 'Yoga']
  const [newRouteName, setNewRouteName] = useState('')


  useEffect(() => {
  localStorage.setItem('workouts', JSON.stringify(workouts))
}, [workouts])

useEffect(() => {
  localStorage.setItem('routes', JSON.stringify(routes))
}, [routes])


  function addWorkout() {
    if (workoutRoute === '__new__') {
  alert('Save your new route first, or pick an existing one')
    return
}
    if (workoutName.trim() === '') return

    const newWorkout = {
      id: Date.now(),
      name: workoutName,
      date: new Date().toLocaleDateString(),
      category: workoutCategory,
      distance: workoutDistance,
      duration: workoutDuration,
      avgHR: workoutAvgHR,
      route: workoutRoute,
      HRRecovery: workoutHRRecovery,
      HRDrop: workoutHRDrop,
      RPE: workoutRPE
    }

    setWorkouts([...workouts, newWorkout])
    setWorkoutName('')
    setWorkoutCategory('')
    setWorkoutDistance('')
    setWorkoutDuration('')
    setWorkoutAvgHR('')
    setWorkoutRoute('')
    setWorkoutHRRecovery('')
    setWorkoutHRDrop('')
    setWorkoutRPE('') 
  }

    function addRoute() {
  if (newRouteName.trim() === '') return
  if (routes.includes(newRouteName)) {
    alert('Route already exists!')
    return
  }
  setRoutes([...routes, newRouteName])
  setWorkoutRoute(newRouteName)
  setNewRouteName('')
   }


  

  function deleteWorkout (id) {
    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }

  return (
    <div>
      <h1>Training Coach App</h1>

    <div className="add-workout-form"> 
      <input
        type="text"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        placeholder="Workout Name"
      />

      <input
        type="number"
        value={workoutDistance}
        onChange={(e) => setWorkoutDistance(e.target.value)}
        placeholder="Distance (km)"
      />

      <input
        type="number"
        value={workoutDuration}
        onChange={(e) => setWorkoutDuration(e.target.value)}
        placeholder="Duration (hours)"
      />

      <input
        type="number"
        value={workoutAvgHR}
        onChange={(e) => setWorkoutAvgHR(e.target.value)}
        placeholder="Average Heart Rate (bpm)"
      />

      <input
        type="number"
        value={workoutHRRecovery}
        onChange={(e) => setWorkoutHRRecovery(e.target.value)}
        placeholder="Heart Rate Recovery (bpm)"
      />

      <input
        type="number"
        value={workoutHRDrop}
        onChange={(e) => setWorkoutHRDrop(e.target.value)}
        placeholder="Heart Rate Drop (bpm)"
      />

      <input  
      type="number"
      value={workoutRPE}
      onChange={(e) => setWorkoutRPE(e.target.value)}
      placeholder="Rate of Perceived Exertion (1-10)"
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

      <select
  value={workoutRoute}
  onChange={(e) => setWorkoutRoute(e.target.value)}
      >

  <option value="">Select route</option>
  {routes.map((route) => (
    <option key={route} value={route}>{route}</option>
  ))}

<option value="__new__">Add new route</option>

      </select>
      
{workoutRoute === '__new__' && (
  <div>
    <input
      type="text"
      value={newRouteName}
      onChange={(e) => setNewRouteName(e.target.value)}
      placeholder="New route name"
    />
    <button onClick={addRoute}>Save route</button>
  </div>
)}

      <button onClick={addWorkout}>Add workout</button>

</div>

{categories.map((category) => (
  <div key={category}>
    <h2 className="category-heading">{category}</h2>
    <ul>
      {workouts
        .filter((workout) => workout.category === category)
        .map((workout) => 
          (
          
    <li key={workout.id} className="workout-card">
        <div className="workout-header">
        <strong>{workout.name}</strong>
        <span>{workout.date}</span>
            </div>
            <div className="workout-details">
                {workout.distance && <span>Distance: {workout.distance} km</span>}
                {workout.duration && <span>Duration: {workout.duration} h</span>}
                {workout.avgHR && <span>Avg HR: {workout.avgHR} bpm</span>}
                {workout.route && <span>Route: {workout.route}</span>}
                {workout.HRRecovery && <span>HR Recovery: {workout.HRRecovery} bpm</span>}
                {workout.HRDrop && <span>HR Drop: {workout.HRDrop} bpm</span>}
                {workout.RPE && <span>RPE: {workout.RPE}</span>}
            </div>
        
            <button className="delete-button" onClick={() => deleteWorkout(workout.id)}>Delete Workout</button>
    </li>

        ))}
    </ul>
  </div>
))}    

</div> 
  )
}

export default App

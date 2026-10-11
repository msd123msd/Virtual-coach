import { useState, useEffect } from 'react'
import './App.css'

function App() {

  {/* Start code for Training Card */}
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem('workouts')
    return saved ? JSON.parse(saved) : []
  })
  
  const [routes, setRoutes] = useState(() => {
    const saved = localStorage.getItem('routes')
    return saved ? JSON.parse(saved) : ["Stiglingh Loop", "School Loop", "Stiglingh Straits", "EDS KCC 10", "Polo Fields", "DBN Musgrave", "DBN Musgrave 2 Beach", "Rolling Essenwood"]
  })

  const [page, setPage] = useState('training')

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
    {/* End Code for Training Card */}

    {/* Start Code for Wellness Card */}

 const [wellnessEntries, setWellnessEntries] = useState(() => {
    const saved = localStorage.getItem('wellnessEntries')
    return saved ? JSON.parse(saved) : []
 })
    
  const [wellnessWeight, setWellnessWeight] = useState('')
  const [wellnessSleep, setWellnessSleep] = useState('')
  const [wellnessRestingHR, setWellnessRestingHR] = useState('')
  const [wellnessEnergy, setWellnessEnergy] = useState('')
  const [wellnessSoreness, setWellnessSoreness] = useState('')
  const [wellnessMood, setWellnessMood] = useState('')
  const [wellnessNotes, setWellnessNotes] = useState('')     
    {/* End Code for Wellness Card */}

  {/* Start Code for Training Input */}
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

  {/* End Code for Training Input */}

  {/* Start Code for Wellness Input */}
  useEffect(() => {
    localStorage.setItem('wellnessEntries', JSON.stringify(wellnessEntries))
  }, [wellnessEntries])

  function addWellnessEntry() {
    if (wellnessWeight === '') return
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      weight: wellnessWeight,
      sleep: wellnessSleep,
      restingHR: wellnessRestingHR,
      energy: wellnessEnergy,
      soreness: wellnessSoreness,
      mood: wellnessMood,
      notes: wellnessNotes
    }

    setWellnessEntries([...wellnessEntries, newEntry])
    setWellnessWeight('')
    setWellnessSleep('')
    setWellnessRestingHR('')
    setWellnessEnergy('')
    setWellnessSoreness('')
    setWellnessMood('')
    setWellnessNotes('')
  }

   function deleteWellnessEntry(id) {
    setWellnessEntries(wellnessEntries.filter((entry) => entry.id !== id))
    }

  {/* End Code for Wellness Input */}

  function deleteWorkout(id) {
    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }



  return (
    <div>
      <h1>Training Coach App</h1>

      {/* Start Code to display tab */}
      <div className="page-tabs">

       <button
       className={page === 'training' ? 'tab active' : 'tab'}
       onClick={() => setPage('training')}
       >
       Training
       </button>

       <button
          className={page === 'wellness' ? 'tab active' : 'tab'}
          onClick={() => setPage('wellness')}
        >
          Wellness
       </button>

       <button
          className={page === 'nutrition' ? 'tab active' : 'tab'}
          onClick={() => setPage('nutrition')}
        >
          Nutrition & Supplements
       </button>

       <button
          className={page === 'summary' ? 'tab active' : 'tab'}
          onClick={() => setPage('summary')}
        >
          Summary
       </button>

      </div>
    {/* End Code to display tab */}


    {/* Start Code for Training Card */}  
      {page === 'training' && (
        <div>
          
        <h2>Training</h2>

        <div className="add-workout-form">
            <input
              type="text"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              placeholder="Workout Name"
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

            <select
              value={workoutRPE}
              onChange={(e) => setWorkoutRPE(e.target.value)}
            >
              <option value="">Select RPE Level (1-10)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
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

          
        </div>
      )}
    {/* End Code for Training Card */} 


    {/* Start Code for Wellness Card */}
      {page === 'wellness' && (
        <div>
          <h2>Wellness</h2>

          <div className="add-workout-form">

             <input
             type="number"
             min="1"
             value={wellnessWeight}
             onChange={(e) => setWellnessWeight(e.target.value)}
             placeholder="Body weight (kg)"
            />
            
            <input
              type="number"
              min="1"
              value={wellnessSleep}
              onChange={(e) => setWellnessSleep(e.target.value)}
              placeholder="Sleep (hours)"
            />

            <input
              type="number"
              min="1"
              value={wellnessRestingHR}
              onChange={(e) => setWellnessRestingHR(e.target.value)}
              placeholder="Resting Heart Rate (bpm)"
            />

            <select
              value={wellnessEnergy}
              onChange={(e) => setWellnessEnergy(e.target.value)}
            >
              <option value="">Select Energy Level (1-10)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
             </select>

            <select
              value={wellnessSoreness}
              onChange={(e) => setWellnessSoreness(e.target.value)}
            >
              <option value="">Select Soreness Level (1-10)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <select
              value={wellnessMood}
              onChange={(e) => setWellnessMood(e.target.value)}
            >
              <option value="">Select Mood Level (1-10)</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <textarea
            value={wellnessNotes}
            onChange={(e) => setWellnessNotes(e.target.value)}
            placeholder="Notes"
            />    

            <button onClick={addWellnessEntry}>Save Entry</button>

           </div>



        </div>
      )}
    {/* End Code for Wellness Card */} 



    {/* Start Code for Nutrition Card */} 
      {page === 'nutrition' && (
        <div>
          <h2>Nutrition & Supplements</h2>
        </div>
      )}

    {/* End Code for Nutrition Card */}

    {/* Start Code for Summary Card */}
      {page === 'summary' && (
       <div>
        <h2>Summary</h2>
       </div>
    )}
     {/* End Code for Summary Card */}

    </div>
  )
}

export default App
const numbers = [1,2,3]
const doubled = numbers.map(function(n) 
{
    return n * 2
})

console.log(doubled)
const tripled = numbers.map((n) => n*3)
console.log(tripled)

const numbers2 = [1,2,3,4,5]
const evens = numbers2.filter((n) => n % 2 === 0)
console.log (evens) 

const myWorkouts = [
   {id : 1, name: "Leg day" },
   {id : 2, name: "Cardio"  },
   {id : 3, name: "yoga" }
]

const idToDelete = 2

const remaining = myWorkouts.filter((workout) => workout.id !== idToDelete)
console.log(remaining)


import './App.css'

// Props (short for "properties") are how data is passed from 
// a parent component to a child component in React.

// Example
function PropExample(props) {
  return (
    <h1>My name is {props.name} and I am {props.age} years old.</h1>
  )
}

// Challenge 1: Render a new component FavoriteFood that takes
// the prop food and renders to the page: "My favorite food is [favoriteFood]"

// Write the function here





// Props can also be destructured beforehand as well.
// Example
function PropExample2({name, age}) {
  return (
    <h1>My name is {name} and I am {age} years old.</h1>
  )
}

// Challenge 2: Refactor your previous function to destructure 
// in the call itself.

function App() {
  return (
    <>
      <PropExample name="Bob" age={24}/>
      {/* Challenge 1: Call your function here */}
      
      {/* <PropExample2 name="Bob" age={24} /> */}
    </>
  )
}

export default App

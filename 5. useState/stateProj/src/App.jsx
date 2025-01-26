import { useState } from 'react'
import './App.css'

function App() {
  // The problem with incrementing count normally is that
  // it does not rerender the component when updated.

  // Example 1 (Open console and click button)
  let count = 0

  // As you can tell count is increasing but the value
  // isn't being shown.
  
  // That is when state comes in. State is used to manage data 
  // that changes over time in a component. It is managed using 
  // the useState hook in functional components.

  // Example 2 (Uncomment Example 2 Code)
  const [stateCount, setCount] = useState(0)

  function increment() {
    setCount((prev) => prev + 1)
  }



  // Challenge create a new button that when pressed doubles
  // the variable value and logs it to console.
  let value = 1

  // Write your code here
  

  return (
    <>
      Example 1 
      <h1>{count}</h1>
      <button onClick={() => {
        count++
        console.log(count)
      }}>
        Increment
      </button>


      {/* <br />
      Example 2
      
      <h1>{stateCount}</h1>
      <button onClick={increment}>New Increment</button> */}

      

      {/* Challenge 1: Create button here */}

    </>
  )
}

export default App

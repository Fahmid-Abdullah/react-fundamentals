import './App.css'

function App() {
  // You can pass a function to handle an event like button click
  function handleClick() {
    console.log("Button Clicked")
  }


  // Challenge: Complete increase count o increment count and
  // log it to console
  let count = 0
  function increaseCount() {
      // Enter code here
  }

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <br/>
      {/* Challenge: Create a new button that calls increaseCount when clicked */}
    </>
  )
}

export default App

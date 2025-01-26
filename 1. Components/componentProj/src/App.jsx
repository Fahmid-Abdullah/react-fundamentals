import './App.css'
import ExampleComponent from './components/exampleComponent'

// A component is a building block of a React application. It can be a 
// function or a class that returns a React element to render.

// Note: Remember to captalize the first letter of functions

// Example 1
function HelloWorld() {
  return (
    <h1>Hello World</h1>
  )
}

// Challenge 1: Create a function that returns h2 tag that says "My name is YourName." 
// and then display it on the page.

// Write the function here





// Example 2
// Like other programming languages, you can define these functions in the 
// own files. To do this, you have to follow a certain formatting. View 
// components/exampleComp.jsx

// Challenge 2: Create a new component that contains two different elements. Import
// the component here and render it.

function App() {
  return (
    <>
      <HelloWorld />
      {/* Challenge 1: Call your function here */}
      
      {/* <ExampleComponent /> */}
      {/* Challenge 2: Call your custom compoenent here */}
    </>
  )
}

export default App

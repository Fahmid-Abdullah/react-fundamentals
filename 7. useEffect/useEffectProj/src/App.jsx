import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1)

  /**
   * Often you want to fetch from an external API. If you
   * try to fetch it normally like below, it will run
   * infinitely since setStarWarsData(data) rerenders the
   * component, which causes fetch to run again which causes
   * a rerender, and so on. You can see this yourself by
   * uncommenting the code snippet below.
   */

  // fetch("https://swapi.dev/api/people/1")
  // .then(res => res.json())
  // .then(data => setStarWarsData(data))

  // console.log(starWarsData)

  /**
   * You might have also noticed that for the first few logs, 
   * it returned null. This is because the API takes some x
   * time to return a value. useEffect deals with both of these
   * issues.
   */

  /**
   * useEffect has two parameters. 
   * 
   * The first parameter is setup.
   * Which is the function with your Effect's logic. This parameter
   * also has a cleanup function which you can read about in React's
   * documentation.
   * 
   * The second parameter is dependencies (optional).
   * Which takes a set of values that the useEffect depends on. If
   * dependencies are stated, the function in the useEffect will only
   * run when the those dependencies change. If left empty ([]), it
   * will only run once at the beginning. See example below.
   */

  // useEffect(() => {
  //   fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => setStarWarsData(data))
    
  // }, [])

  // console.log(starWarsData)

  /**
   * Now instead if we want to make it depend on something, we can
   * do the following. When you press the button, the count changes,
   * which causes the function inside useEffect to run.
   */

//   useEffect(() => {
//     fetch(`https://swapi.dev/api/people/${count}`)
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
// }, [count])


  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Next</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App

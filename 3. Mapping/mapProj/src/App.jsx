import './App.css'
import MapExample from './components/mapExample';

function App() {
  // You can use JavaScript’s .map() method works just like
  // loops. You can loop over an array and perform some action
  // for each value.

  // Example
  const users = [
    { name: 'Bob', age: 24 },
    { name: 'John', age: 30 },
    { name: 'Sara', age: 25 },
  ];

  function printUsers() {
    users.map((user) => (
      console.log(user)
    ))
  }
  printUsers()

  // Similarly. you can use.map() method to loop over an 
  // array and render components dynamically. View 
  // components/mapExample.jsx to see what is being rendered.

  // Challenge 1: Using the example as reference, instead of
  // logging it to console, render a header for each user's name.

  function DisplayUsers() {
    return (
      // Enter code here
      users.map((user) => (
        <h1>{user.name}</h1>
      ))
    )
  }

  // Challenge 2: Along with user's name, also render each user's age.



  // You now know how to use props and mapping, now we will combine them.
  // View components/mapExample.jsx

  // Challenge 3: Create a new component Products that renders productName 
  // and productPrice for each product in the following array.
  
  const products = [
    { productName: 'Phone', productPrice: 50 },
    { productName: 'Tablet', productPrice: 100 },
    { productName: 'Laptop', productPrice: 200 },
  ]

  return (
    <>
      <DisplayUsers />
      


      {/* { // You can enter javascript code into return using {}
        users.map((user) => (
        <MapExample name = {user.name} age = {user.age} />
        ))
      } */}


      {/* Map over products here and pass necessary props */}

    </>
  )
}

export default App

import { useState } from 'react';

function App() {
  
    /* 
      <form> - Creates a form for user input, with:
        - action={signUp} - Calls the signUp function on form submission.
      <label> - Labels the email input for accessibility.
        - htmlFor="email" - Associates the label with the input field.
      <input> - Defines an email input field, with:
        - id="email" - Unique identifier for the field.
        - type="email" - Ensures input is in email format.
        - name="email" - Used as the key when submitting form data.
        - placeholder="joe@schmoe.com" - Displays example text in the field.
      <button> - A clickable button to submit the form.
    */
  
  function signUp(formData) {
    const email = formData.get("email")
    console.log(email)
  }

  function formExample() {
    return (
      <form className='form-comp' action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        <button>Submit</button>
      </form>
    )
  }

  /**
    Try it. Type something in the email input box and submit. Now check console.
    Note: If you get an error about action tag, run npm install react@latest react-dom@latest
 */

  // Challenge 1: Add another input field for password. Hint: There exists a password type.

  /**
   * Challenge 2: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */
  
  return (
    <div className='app-comp'>
      <section >
        <h1>Signup form</h1>
        {formExample()}
      </section>
    </div>
  )
}

export default App;

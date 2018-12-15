import React from 'react';

function SignIn() {

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return(
    <div className='sign-in-window'>
      <style>{`
        .sign-in-window {
          width: 500px;
          margin: 100px auto;
          background-color: #47e58b;
          padding: 30px;

          color: black;
        }
      `}</style>
      <h1>SignIn</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label for='email'>Email:</label>
          <input name='email' className='form-control' type='email'/>
        </div>
        <div className='form-group'>
          <label for='password'>Password:</label>
          <input name='password' className='form-control' type='password'/>
        </div>
        <button type='submit' className='btn btn-default'>Sign-In</button>
      </form>
    </div>
  );
}

export default SignIn;
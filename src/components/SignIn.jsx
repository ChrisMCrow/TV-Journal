import React from 'react';
import { login, signup } from './../actions';
import PropTypes from 'prop-types';

function SignIn(props) {

  let email = React.createRef();
  let password = React.createRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    login(email.current.value, password.current.value, props.dispatch);
    email.current.value = '';
    password.current.value = '';
  }

  function handleSignup() {
    signup(email.current.value, password.current.value, props.dispatch);
    email.current.value = '';
    password.current.value = '';
  }

  return(
    <section className='signin'>
      <h1>SignIn</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label for='email'>Email:</label>
          <input name='email' className='form-control' type='email' ref={email} />
        </div>
        <div className='form-group'>
          <label for='password'>Password:</label>
          <input name='password' className='form-control' type='password' ref={password} />
        </div>
        { props.user.loginError ? (<p><small className='text-muted'>{props.user.loginError}</small></p>) : null}
        {console.log('error message: ', props.user.loginError)}
        <button type='submit' className='btn btn-default'>Sign-In</button>
        &nbsp; &nbsp;
        <button onClick={handleSignup} className='btn btn-default' type='button'>Sign-Up</button>
      </form>
    </section>
  );
}

SignIn.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default SignIn;
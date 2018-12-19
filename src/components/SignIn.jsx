import React from 'react';
import { login, signup } from './../actions';
import PropTypes from 'prop-types';

function SignIn(props) {

  let _email;
  let _password;

  function handleFormSubmit(e) {
    e.preventDefault();
    login(_email.value, _password.value, props.dispatch);
    _email.value = '';
    _password.value = '';
  }

  function handleSignup() {
    signup(_email.value, _password.value, props.dispatch);
    _email.value = '';
    _password.value = '';
  }

  return(
    <section className='signin'>
      <h1>SignIn</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Email:</label>
          <input name='email' className='form-control' type='email' ref={(input) => {_email = input;}} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input name='password' className='form-control' type='password' ref={(input) => {_password = input}} />
        </div>
        { props.user.loginError ? (<p><small className='text-muted'>{props.user.loginError}</small></p>) : null}
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
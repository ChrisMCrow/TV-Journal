import React from 'react';
import { signup } from '../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignUp(props) {
  let _email;
  let _password;

  function handleFormSubmit(e) {
    e.preventDefault();
    signup(_email.value, _password.value, props.dispatch);
    _email.value = '';
    _password.value = '';
  }

  return (
    <section className='signin'>
      <h1>Create a New Account</h1>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Email:</label>
          <input name='email' className='form-control' type='email' ref={(input) => { _email = input; }} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input name='password' className='form-control' type='password' ref={(input) => { _password = input }} />
        </div>
        {props.user.loginError ? (<p><small className='text-muted'>{props.user.loginError}</small></p>) : null}
        <button type='submit' className='btn btn-default'>Create Account</button>
        &nbsp; &nbsp;
        <Link to='/'>Have an account? Sign-In</Link>
      </form>
    </section>
  );
}

SignUp.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
}

export default SignUp;
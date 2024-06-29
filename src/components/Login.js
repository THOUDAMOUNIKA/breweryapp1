import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Login.css';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    // Add logic for sign in (API call or authentication logic)
  };

  return (
    <div className="signin-container">
      <h2 className="logo">SignIn</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type="text" 
            placeholder="Phone number, username, or email"
            {...register('username', { required: 'Username/Email is required' })} 
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password"
            {...register('password', { required: 'Password is required' })} 
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <button type="submit" className="btn-login">Log in</button>
      </form>
      <div className="signin-options">
        <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
      </div>
      <div className="signup-prompt">
        <span>Don't have an account? <Link to='/signup' className="signup-link">Sign up</Link></span>
      </div>
    </div>
  );
};

export default SignIn;
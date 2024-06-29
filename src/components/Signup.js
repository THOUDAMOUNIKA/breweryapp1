import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Signup.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    // Add logic for sign up (API call or authentication logic)
  };

  return (
    <div className="signup-container">
      <h2 className="logo">SignUp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type="email" 
            placeholder="Email"
            {...register('email', { required: 'Email is required' })} 
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Username"
            {...register('username', { required: 'Username is required' })} 
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
        <button type="submit" className="btn-signup">Sign up</button>
      </form>
      <div className="login-prompt">
        <span>Already have an account? <Link to="/" className="login-link">Login</Link></span>
      </div>
    </div>
  );
};

export default SignUp;
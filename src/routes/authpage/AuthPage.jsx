import React from 'react';

import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';
import './authpage.scss'

const AuthPage = () => {
 

  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default AuthPage
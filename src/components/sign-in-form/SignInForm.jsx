import React, {useState} from 'react'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from './FormInput';
import Button from '../button/Button'
import './signInForm.scss'

const SignInForm = () => {
  const defaultForm = {
    email: '',
    password: '',
}
  const [formFields, setFormFields] = useState(defaultForm);
  const { email, password} = formFields;

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
   
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

        setFormFields(defaultForm);
    } catch(error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }

  }

  return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit ={handleSubmit}>
            <FormInput 
                label="Email"
                type="email" 
                name="email" 
                value={email} 
                onChange={handleChange} required />

            <FormInput 
                label="Password"
                type="password" 
                name="password" 
                value={password} 
                onChange={handleChange} required />
            
            <div className="buttons-container"> 
            <Button type="submit">Sign In</Button>
            <Button buttonType="google" onClick={signInWithGoogle} type="button" >Google sign in</Button>
            </div>
        </form>
 
    </div>
  )
}

export default SignInForm
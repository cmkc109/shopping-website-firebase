import React, {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from './FormInput';
import Button from '../button/Button'
import './signUpForm.scss'

const SignUpForm = () => {
  const defaultForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
  const [formFields, setFormFields] = useState(defaultForm);
  const {displayName, email, password, confirmPassword } = formFields                          

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]: value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocumentFromAuth(user, {displayName});
        setFormFields(defaultForm);
    } catch(error) {
        if (error.code === "auto/email-already-in-use") {
            alert('Cannot create user, email already in use')
        } 
            console.log(error)
      
    }

  }

  return (
    <div className="sign-up-container">
        <h2>Sign up with your email and password</h2>
        <form onSubmit ={handleSubmit}>
            
            <FormInput 
                    label="Display Name"
                    type="text" 
                    name="displayName" 
                    value={displayName}
                    onChange={handleChange}  required />

          
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

            <FormInput 
                label="Confirm Password"
                type="password" 
                name="confirmPassword" 
                value={confirmPassword} 
                onChange={handleChange} required />
            <Button type="submit">Sign up</Button>
        </form>
    </div>
  )
}

export default SignUpForm
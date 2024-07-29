import React from 'react';
import SignUpHero from '../components/SignUp/SignUpHero';
import SignUpForm from '../components/SignUp/SignUpForm';

function SignUp() {
  return (
    <>
      {/* Hero Section for Sign-Up Page */}
      {/* Displays introductory content, such as a headline or image, to engage users */}
      <SignUpHero />
      
      {/* Sign-Up Form Section */}
      {/* Contains the form fields and submission logic for user registration */}
      <SignUpForm />
    </>
  );
}

export default SignUp;

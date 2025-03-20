import React from 'react';
import "../styles/register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleme");
  };

  return (
    <form id='regForm' onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' id='regName' placeholder='Enter your Name' />

      <label>Email</label>
      <input type='text' id='regEmail' placeholder='Enter your Email' />

      <label>Age</label>
      <input type='text' id='regAge' placeholder='Enter your Age' />

      <label>Gender</label>
      <div className="gender-options">
        <input type='radio' id='regMale' name='gender' />
        <label htmlFor='regMale'>Male</label>

        <input type='radio' id='regFemale' name='gender' />
        <label htmlFor='regFemale'>Female</label>
      </div>

      <label>Password</label>
      <input type='text' id='regPass' placeholder='Enter your Password' />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default Register;

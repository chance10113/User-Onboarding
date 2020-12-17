// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react'
// import User from '../Components/User'
//import Form from '../components/UserForm.js'
//import Schema from '../components/UserSchema'
import axios from 'axios'
import * as yup from 'yup'
import Friend from './Components/User';

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: "",
  email: "",
  password:"",
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};
const initialUsers = [];
const initialDisabled = true;


function App() {
  //States
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //Helper Functions

  const getUsers = () => {
    //Need to do axios
  };

  const postNewUser = (newUser) => {
    //Gotta do Axios Post stuff, find the api in readme i think
  }

  //event Handlebars

  const inputChange = (name, value) => {
    //this is for validation, use yup in here, also setFormValues and setFormErrors
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)  
    //This actually calls the stuff into action, 
    //but we gota comment it out for now, because its not fully running
  }

  //UseEffects!! (Stuff Happens on the side, don't ya know!)

  useEffect(() => {
    getUsers();
  }, [] )

  useEffect(() => {
    //SCHEMA STUFF GOES HERE!!! BETTER WRITE IT!!
    //also some SetDisabled stuff too
  }, [/*prolly form values*/])

  return (
    <div className="container">
      <header>
        <h1> User List and Sign Up </h1>
      </header>

       <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        /> 
       

         {/* {users.map((user) => {
           return <Friend key={user.id} details={user} />
         } )} */}
    </div>
  );
}

export default App;

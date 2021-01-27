// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import Form from './Components/Form.js'
import schema from "./Validation/FormSchema.js"
import user from "./Components/User.js"

const initialFormValues = {
  //Text
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  //Checkbox
  tOS: false,
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  tOS: false
}

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
    axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      setUsers(res.data.data);
    })
    .catch((error) => {
      console.log('getUsers failed', error)
    })
  }
  return (
    null
  );
}

export default App;

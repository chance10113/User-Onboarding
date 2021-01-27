// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./Components/Form.js";
import schema from "./Validation/FormSchema.js";
import user from "./Components/User.js";

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
  tOS: false,
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
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log("getUsers failed", error);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users")
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((error) => {
        console.log("postNewUser failed", error);
      });
  };

  //Event Handlers

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors,
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  
}

export default App;

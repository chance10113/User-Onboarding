// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./Components/Form.js";
import schema from "./Validation/FormSchema.js";
import User from "./Components/User.js";

const initialFormValues = {
  //Text
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  //Checkbox
  tOS: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
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
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setFormValues(initialFormValues);
      })
      .catch((error) => {
        console.log("postNewUser failed", error);
      });
  };

  //Event Handlers

  const inputChange = (name, value) => {
    //debugger
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
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  //Use Effects

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <section className= "U-I-container">
      <header>
        <h1> User List and Sign Up </h1>
      </header>

      <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} details={user} />
      })}
    </section>
  )
}

export default App;

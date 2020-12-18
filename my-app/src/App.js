// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import User from "./Components/User";
import UserForm from "./Components/UserForm";
import schema from "./Components/UserSchema";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {
  //Text
  first_name: "",
  email: "",
  password: "",
  //Check
  termsOfService: false,
};
const initialFormErrors = {
  first_name: "",
  email: "",
  password: "",
  termsOfService: false,
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
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log("GetUsers Broke!", error);
      });
  };

  const postNewUser = (newUser) => {
    console.log(newUser);
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
        console.log("Post getBack?", users);
        console.log("Response", res.data);
        console.log("setUsers", [res.data, ...users]);
      })
      .catch((error) => {
        console.log("postNewUserBroke", error);
      });
  };

  //event Handlebars

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
    //This actually calls the stuff into action,
    //but we gota comment it out for now, because its not fully running
  };

  //UseEffects!! (Stuff Happens on the side, don't ya know!)

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    //SCHEMA STUFF GOES HERE!!! BETTER WRITE IT!!
    //also some SetDisabled stuff too
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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

      {users.map((user) => {
        return <User key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;

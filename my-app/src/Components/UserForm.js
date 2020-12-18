import React from "react";

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const useThisValue = type === "checkbox" ? checked : value;
    change(name, useThisValue);
  };

  return (
    <form className="UserForm Container" onSubmit={onSubmit}>
      <div className="UserForm-group submit div">
        <h2> Add a User!</h2>

        <button id="submitButton" disabled={disabled}>Submit</button>

        <div className="Errors">
          <div>{errors.first_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>

        <div className="UserForm-group inputs">
          <h4> Enter Login </h4>
          <label>
            first_name
            <input
              value={values.first_name}
              onChange={onChange}
              name="first_name"
              type="text"
            />
          </label>

          <label>
            Email
            <input
              value={values.email}
              onChange={onChange}
              name="email"
              type="email"
            />
          </label>

          <label>
            Password
            <input
              value={values.password}
              onChange={onChange}
              name="password"
              type="text"
            />
          </label>
        </div>
        <div className="UserForm-group CheckBox">
          <label>
            Terms Of Service
            <input
              type="checkbox"
              name="termsOfService"
              checked={values.termsOfService}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}

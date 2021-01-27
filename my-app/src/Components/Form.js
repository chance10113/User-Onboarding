import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="user-form container" onSubmit={onSubmit}>
      <div className="user-form-group submit">
        <h2> Add User </h2>
        <button disabled={disabled}>Submit</button>
        <div className="errors">
          {/* VALIDATION ERRORS */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tOS}</div>
        </div>
        <div className="user-form-group inputs">
          <h4> New User Info </h4>

          {/* TEXT INPUTS */}

          <label>
            First Name
            <input
              value={values.firstName}
              name="firstName"
              type="text"
              onChange={onChange}
            />
          </label>

          <label>
            Last Name
            <input
              value={values.lastName}
              name="lastName"
              type="text"
              onChange={onChange}
            />
          </label>

          <label>
            Email
            <input
              value={values.email}
              name="email"
              type="text"
              onChange={onChange}
            />
          </label>

          <label>
            Password
            <input
              value={values.password}
              name="password"
              type="text"
              onChange={onChange}
            />
          </label>

          {/* Terms Of Service CHECKBOX */}

          <label>
            I have Read the Terms Of Service
            <input
              type="checkbox"
              name="tOS"
              checked={values.tOS}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}

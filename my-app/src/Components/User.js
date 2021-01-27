import React from "react";

export default function User({ details }) {
  if (!details) {
    return <h3> This is a placeholder message while the system loads </h3>;
  }

  return (
    <div className="userContainer">
      <h3>
        {details.lastName}, {details.firstName}
      </h3>
      <p> Email: {details.email}</p>
      <p> Password: {details.password}</p>
    </div>
  );
}

import React from 'react'

export default function UserForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit()
    }

    const onChange = (event) => {
        const {name, value, type, checked } = event.target
        const useThisValue = type === "checkbox" ? checked : value;
        change(name, useThisValue)
    }

    return(
        <form className="UserForm Container" onSubmit={onSubmit} >
            <div className="UserForm-group submit div">
                <h2> Add a User!</h2>

                <button disabled={disabled}>Submit</button>

                <div className="Errors">
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    Maybe I need checkbox error here? 
                </div>
            </div>
        </form>


    )
}
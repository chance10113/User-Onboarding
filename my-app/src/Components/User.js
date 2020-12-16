import React from 'react'
export default function Friend({details}) {
    if (!details) {
        return <h3> This is a placeholder message while we try to load the system </h3>
    }

    return (
        <div className='userContainer'>
            <h2>{details.usename}</h2>
            <p> Email:{details.email} </p>
            <p> Password:{details.password} </p>
        </div>
    )
}
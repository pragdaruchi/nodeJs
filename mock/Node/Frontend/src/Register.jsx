import React from 'react'

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <input type="text" placeholder='Enter Your Age' name='age' />
            <input type="text" placeholder='Enter Your Password' name='password' />
            <button>Submit</button>
        </div>
    )
}

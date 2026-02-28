import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [formdata, setFormdara] = useState({})

    const handleChange = (e) => {
        setFormdara({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        await axios.post("http://localhost:1002/register",formdata).then((res)=>{
            alert(res.data.msg)
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formdata.name} placeholder='Enter Your Name' name='name' />
                <input type="text" onChange={handleChange} value={formdata.email} placeholder='Enter Your email' name='email' />
                <input type="text" onChange={handleChange} value={formdata.password} placeholder='Enter Your password' name='password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

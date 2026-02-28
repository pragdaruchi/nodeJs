import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        if (formdata.name && formdata.name.length <= 3) {
            alert("Name must be more than 3 characters")
            return
        }
        if (editIndex == null) {
            await axios.post("http://localhost:5000/users", formdata).then((res) => {
                setRecord(res.data, formdata)
            })
        }
        else {
            await axios.put(`http://localhost:5000/users/${editIndex}`, formdata).then(() => {
                let singleData = record.find((item) => item.id == editIndex)
                singleData.name = formdata.name
                singleData.email = formdata.email
                singleData.phone = formdata.phone
                singleData.image = formdata.image
            })
        }
        setEditIndex(null)
        setFormdata({
            name: "",
            email: "",
            phone: "",
            image: ""
        })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`).then(() => {
            let newData = record.filter((item) => item.id != id)
            setRecord(newData)
        })
    }

    const handleEdit = (id) => {
        const singleData = record.find((item) => item.id == id)
        setFormdata({
            name: singleData.name,
            email: singleData.email,
            phone: singleData.phone,
            image: singleData.image
        })
        setEditIndex(id)
    }

    const fetchData = async () => {
        await axios.get("http://localhost:5000/users").then((res) => {
            setRecord(res.data)
        })
    }
    return (
        <div>
            <h1>CRUD</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={formdata.name} placeholder='Enter Your Name' name='name' />
                <input type="email" onChange={handleChange} value={formdata.email} placeholder='Enter Your Email' name='email' />
                <input type="number" onChange={handleChange} value={formdata.phone} placeholder='Enter Your Phone Number' name='phone' />
                <input type="text" onChange={handleChange} value={formdata.image} placeholder='Enter Image URL' name='image' />
                <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
            </form>
            {
                record.map((e, i) => {
                    return <ul key={i}>
                        {e.image && <li><img src={e.image} /></li>}
                        <li>{e.name}</li>
                        <li>{e.email}</li>
                        <li>{e.phone}</li>
                        <li><button onClick={() => handleEdit(e.id)}>Edit</button></li>
                        <li><button onClick={() => handleDelete(e.id)}>Delete</button></li>
                    </ul>
                })
            }
        </div>
    )
}

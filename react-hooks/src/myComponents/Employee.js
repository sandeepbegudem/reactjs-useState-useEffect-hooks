import React, {useState, useEffect} from 'react'

export const Employee = () => {

    // const [name, setName] = useState('John')
    // const [role, setRole] = useState('Data Scientist')

    const [employee, setEmployee] = useState({
        name:'Doe',
        role: 'Data Scientist'
    })

    const [contact, setContact] = useState({
        email: 'john@gmail.com',
        phone:'1234567890',
        company:'google',
        address: '123 main street fremont ca 12345 usa'
    })

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("count value", count)
        return() => {
            console.log("cleaning up to update the new value!")
        }
    }, [count])

    const updateEmployee = () => {
        setEmployee({
            name:'Josh',
            role:'AI/ML Engineer'
        })
    }

    const updateContact = () => {
        setContact({
            email: 'josh@gmail.com',
            phone:'1234567890',
            company:'meta',
            address: '123 main street fremont ca 12345 usa'
        })
    }
  return (
    <div>
        <h1>Employee Details</h1>
        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
        <button onClick={updateEmployee}>updateEmployee</button>
        <div>
            <h2>Contact Details</h2>
            <h3>email: {contact.email}</h3>
            <h3>phone: {contact.phone}</h3>
            <h3>company: {contact.company}</h3>
            <h3>address: {contact.address}</h3>
            <button onClick={updateContact}>Update Contact</button>
        </div>
        <div>
            <h4>Count: {count}</h4>
        <button onClick={()=> setCount(count + 1)}>Increment Me</button> <button onClick={()=> setCount(count - 1)}>Decrement Me</button>
        </div>
        
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export default function UserList() {


    const [users, setUsers] = useState([])


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <ul className='space-y-3'>
            {
                users.map(user => <li key={user.id} className='flex flex-col'>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </li>)
            }
        </ul>
    )
}
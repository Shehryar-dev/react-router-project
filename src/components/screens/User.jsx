import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {Id} = useParams()
    return (
        <>
            <div className='bg-gray-600'>User: {Id}</div>
        </>
    )
}

export default User

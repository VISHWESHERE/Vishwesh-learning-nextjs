import React from 'react'

const UserDetails = ({params}:{params:{id: string}}) => {
    const {id}= params;
  return (
    <div>
        <h1 className='text-4xl'>User Details: {id}</h1>
    </div>
  )
}

export default UserDetails
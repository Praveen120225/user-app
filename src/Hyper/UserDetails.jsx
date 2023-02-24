import React from 'react'


const UserDetails = (User) => {
  return (
    <div>
      <h3>User Detail</h3>
     <h3>{JSON.stringify(User)}</h3>
    </div>
  )
}

export default UserDetails

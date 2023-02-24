import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'


const User = () => {
  let [User, setUser] = useState({})
  let [selecteduser ,setselecteduser]= useState({})
  useEffect(() => {
    Axios.get('https://dummyjson.com/users').then((response) => {
      //get response
      setUser(response.data)
    }).catch((error) => {
    })
  }, []);
  let SelectedUserHandler= (User)=>{
setselecteduser(User)
  }
  return (
    <div className="container">
      <div className="row">
        <pre>{JSON.stringify(User)}</pre>
        <div className="col-md-8">
          {
            Object.keys(User).length > 0 ? <> <UserList users={User.users} selecteduser={SelectedUserHandler}  /></> : <div>data not found</div>
          }
        </div>
        <div className="col-md-4">
          {/* {
            Object.keys(selecteduser).length >0 ? <>
             <UserDetails  selectedUser={selecteduser}/> </> : null 
          } */}
          {
            Object.keys(selecteduser).length > 0 ? <><UserDetails selecteduser={selecteduser}/> </> : null
          }
          
         

        </div>
      </div>
    </div>
  )
}

export default User

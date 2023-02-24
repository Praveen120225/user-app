import React from 'react'



const userList = ({users}) => {
  let  SelectedUserHandler =(user)=>{
console.log(user)
  }
  return (

   <div className="container">
    <h1>user List</h1>
    <pre>{JSON.stringify(users) }</pre>
    <div className="row">
        <div className="col">
            <table className="table table-striped">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                
                    </tr>
                </thead>
                <tbody>
                     {
                        users.map((user)=>{
                             return <tr key={user.id} onClick={SelectedUserHandler.bind(this,user)}>
                                 <td>{user.id}</td>
                                 <td>{user.firstName}</td>
                                 <td>{user.email}</td>
                                 <td>{user.gender}</td>
                             </tr>
                        })
                     }
                </tbody>
            </table>
        </div>
    </div>
   </div>
  
  ) 

}

export default userList

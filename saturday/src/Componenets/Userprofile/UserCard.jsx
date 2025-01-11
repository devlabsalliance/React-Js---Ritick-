import React from 'react'
import '../Userprofile/Usercard.css'

const UserCard = ({users}) => {
  return (
    

    <div className='card'>
      <h3>Name : {users.Name}</h3>
      <p>Age :{users.Age}</p>
      <p>Email :{users.Email}</p>
      
    </div>

   
    
  )
}

export default UserCard

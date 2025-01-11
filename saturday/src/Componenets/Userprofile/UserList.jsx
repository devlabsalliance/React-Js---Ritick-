import React from 'react'
import UserCard from './UserCard'

const UserList = ({user}) => {
  return (
    <div>
        {
            user.map((users)=> (
                  <UserCard key={users.id} users = {users}/>
            )
        )}
      
    </div>
  );
}

export default UserList

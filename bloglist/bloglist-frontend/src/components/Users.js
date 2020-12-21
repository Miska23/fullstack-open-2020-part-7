import React from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'

const Users = ({ blogs, users, selectedUser, onSelectUser, clearSelectedUser }) => {

  return (
    <div>
      {selectedUser
        ? <UserDetails
          user={selectedUser}
          clearSelectedUser={clearSelectedUser}/>
        :
        <UserList blogs={blogs} users={users} onSelectUser={(event, user) => onSelectUser(event,user)}/>
      }


    </div>

  )
}


export default Users
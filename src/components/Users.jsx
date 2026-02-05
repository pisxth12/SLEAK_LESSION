import React from 'react'
import { useUsers } from '../hooks/userUsers';
import UserCard from './UserCard';
import Loading from './ui/Loading';
import Error from './ui/Error';

const Users = () => {
    const {users, loading, error} = useUsers();
    if(loading) return <Loading message='User is loading...'/>
    if(error) return <Error error={error}/>
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
           {users.map((user) => (
            <UserCard key={user.id} user={user}/>
           ))}
        </div>
    </div>
  )
}

export default Users
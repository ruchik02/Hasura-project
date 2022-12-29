import React from 'react'
import { useQuery, gql } from '@apollo/client';
const USERS= gql`
  query GetUser {
    users{
      id
      name
      created_at
      last_seen
    }
  }
`;

function DisplayUser() {
    const { loading, error, data } = useQuery(USERS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.users.map(({ id, name}) => (
      <div key={id}>
        <h3>{name}</h3>
      </div>
    ));
  }
const Users = () => {
  return (
    <div>
        <DisplayUser/>
    </div>
  )
}

export default Users;
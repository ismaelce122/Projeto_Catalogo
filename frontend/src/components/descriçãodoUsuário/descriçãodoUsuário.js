import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Endereço:</strong> {user.address}</p>
      <p><strong>Telefone:</strong> {user.phone}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default UserProfile;

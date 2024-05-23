import React from 'react';

const Member = ({ member }) => {
  return (
    <div className="member">
      <img src={member.avatar} alt={`${member.first_name}'s avatar`} />
      <div className="username">{member.email}</div>
      <div className="books-read">
        <h3>{member.first_name} {member.last_name} Read</h3>
        <ul>
          {
          member.booksRead.split(',').map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Member;
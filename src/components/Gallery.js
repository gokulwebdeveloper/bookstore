import React from 'react';
import Member from './Member';

const Gallery = ({ members }) => {
  return (
    <div className="gallery">
      {members.map(member => (
        <Member key={member.first_name} member={member} />
      ))}
    </div>
  );
};

export default Gallery;
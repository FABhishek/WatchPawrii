import React, { useEffect } from 'react';

const RoomId = ({ roomId }) => {
  return (
    <div className='roomIdContainer'>
      <h2
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigator.clipboard.writeText(roomId);
        }}>
        {roomId}
      </h2>
      <div className='hoverContainer'>
        <p>Click to copy</p>
      </div>
    </div>
  );
};

export default RoomId;


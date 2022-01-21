import React, { useState } from 'react';
import './messageinput.css';

const NewMessage = ({socket}) => {
  const [value, setValue] = useState('');
  
  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <div className='container'>
    <form className = "input-box" onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </form>
    </div>
  );
};

export default NewMessage;
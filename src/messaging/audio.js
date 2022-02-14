import React from 'react';
import './audio.css';
import { useState, useEffect } from "react";
import io from 'socket.io-client';
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";


function audioChat ( { joinVoice, leaveVoice, join, setJoin} )  {
  const btnClick = () => {
    if(join) {
      leaveVoice();
      setJoin(0);
    }
    else {
      joinVoice();
      setJoin(1);
    }
  }

  return (
    <div className="container">
      <button className="voicebutton" onClick = { btnClick }> 
        {  join ? 
        <p>Leave Voice
        <FontAwesome className="fas fa-2x fa-microphone-slash" /></p> 
        : 
        <p>Join Voice 
          <FontAwesome className="fas fa-2x fa-microphone voiceicon"/></p> } 
      </button>
    </div>
  )
}

export default audioChat;

import React from 'react';
import './audio.css';
import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import FontAwesome from "react-fontawesome";
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


function audioChat() {

    

  return (
    <div className="container">
        <button className="joinAudio">
        <FontAwesome
                icon={faPhoneVolume}
              />
              join-call
        </button>
    </div>
  )
}

export default audioChat;

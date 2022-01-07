import React from 'react'
import Modal from "react-modal";
import "./Room.css"

function Room() {
    return (
        <div className="App">
            <nav className="navbar NavColor">
                <a className="textColor" href="#">
                    <h1>WatchPawri!!!!</h1>
                </a>
                <a className="leave-btn"href="#">
                    <i class="fas fa-sign-out-alt" aria-hidden="true"></i> 
                    <h1>Leave Room</h1>
                </a>
            </nav>
        </div>
    )
}

export default Room

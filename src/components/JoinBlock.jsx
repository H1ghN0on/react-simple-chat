import React from 'react'
import socket from '../socket';

function JoinBlock() {
    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value=""/>
            <input type="text" placeholder="Ваше имя" value=""/>
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    )
}

export default JoinBlock

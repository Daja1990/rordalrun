import React from 'react'
import './Notfound.css';

export default function Notfound(props) {
    return (
        <div className="notfoundwrapper">
            <h2 className="notfound-h">40<span className="flip">4</span></h2>
            <p className="notfound-p">Siden findes desværre ikke</p>
            <br />
            <button className="notfound-button">Tilbage til Forsiden</button>
        </div>
    )
}
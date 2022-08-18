import React from 'react';
import '../styles/main.css';
import img from '../assets/images/engine_trm.png'

function Header(props) {
    return (
        <div className="flex-container-articles">
            <div className="flex-item-articles">
                <img src={img} alt="l.gauge" />
                <p>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                </p>
            </div>
        </div>
    )
}

export default Header
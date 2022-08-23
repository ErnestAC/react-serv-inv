import React from 'react';
import '../styles/main.css';
import img from '../assets/images/engine_trm.png'

function Header({ title, subtitle }) {
    return (
        <div className='flex-container-articles'>
            <div className='flex-item-articles'>
                <img src={img} alt="l.gauge" />
                <p>
                    <h2>{title}</h2>
                    <h1>{subtitle}</h1>
                </p>
            </div>
        </div>
    )
}

export default Header
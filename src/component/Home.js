import React from 'react'
import logo from '../logo.svg';
import '../App.css';
export default function Home() {
    return (
        <div className='d-flex justify-content-center'>
            <img src={logo} style={{ height: '50vmin' }} className="App-logo " alt="logo"></img>
        </div>
    )
}

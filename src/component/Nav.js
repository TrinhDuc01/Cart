import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import {
    Link,
    Route,
    Routes,
} from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import ListProduct from './ListProduct';
export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ProductList">ProductList</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/Cart' Component={Cart}></Route>
                <Route path='/ProductList' Component={ListProduct}>ListProduct</Route>
            </Routes>
        </>

    )
}

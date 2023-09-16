import React, { useState } from 'react'
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
import DetailProduct from './DetailProduct';
function Nav() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(prev => !prev)
    }
    const handleToggleLink = () =>{
        setToggle(false)
    }
    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-light fs-4 fixed-top">
                <div className="container-fluid">
                    <Link className="nav-link" to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <button className="navbar-toggler" onClick={handleToggle} type="button" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={toggle?"collapse show navbar-collapse":"collapse navbar-collapse"} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleToggleLink} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleToggleLink} to="/ProductList">ProductList</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  onClick={handleToggleLink} to="/Cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/Cart' Component={Cart}></Route>
                <Route path='/ProductList' Component={ListProduct}>ListProduct</Route>
                <Route path='/DetailProduct' Component={DetailProduct}>ListProduct</Route>
            </Routes>
        </>

    )
}
export default Nav;
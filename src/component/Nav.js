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
import DetailProduct from './DetailProduct';
export default function Nav() {
    return (
        <>
            <header class="navbar navbar-expand-lg navbar-light bg-light fs-4 fixed-top">
                <div class="container-fluid">
                    <Link className="nav-link" to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/ProductList">ProductList</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/Cart">Cart</Link>
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

import React from "react";
import {Link, BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import About from "./About";

function Header() {
    const loc = useLocation;
    console.log(loc);
    return (
        <Router>
            <header>
                <div id='logo'>
                    <h2>MY Webstore</h2>
                </div>
                <div>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
            </header>
            <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
        </Router>
    )
}

export default Header;
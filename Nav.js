import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <Link to="/">APP</Link> &nbsp;&nbsp;
                    <Link to="/home"> HOME </Link> &nbsp;&nbsp;
                    <Link to="/about">ABOUT</Link> &nbsp;&nbsp;
                </nav>
            </div>
        )
    }
}

export default Nav;
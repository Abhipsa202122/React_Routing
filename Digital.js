import React, { Component } from "react";
//import {Link} from 'react-router-dom';
class Digital extends Component{
    render(){
        return(
            <div style={{"textAlign":"center","width":"100%","color":"blue","height":"80%"}}>
                <h2>Digital Component</h2>
                <div>
                    <ul style={{"textAlign":"center","lifestyle":"none"}}>
                    <li><Link to="/About/Digital/UI path">UIpath</Link></li> &nbsp;&nbsp;
                    <li><Link to="/About/Digital/Bigdata">Bigdata </Link></li>&nbsp;&nbsp;
                    </ul>
                </div> 
            </div>
        )
    }
}
export default Digital;

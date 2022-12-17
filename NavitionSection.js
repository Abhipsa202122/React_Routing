import React, { Component } from "react";
class NavigationSection extends Component{
    render(){
        return(
            <div style={{"textAlign":"center","width":"100%","color":"blue","height":"80%"}}>
                <h2>NewIt Component</h2>
                <nav>
                    <Link to="/About/NewIt">NewIt</Link>&nbsp;&nbsp;
                    <Link to="/About/Digital">Digital </Link>&nbsp;&nbsp;
                </nav>    
                
            </div>
        )
    }
}
export default NavigationSection;

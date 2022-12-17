import React, { Component } from "react";
class NewIt extends Component{
    render(){
        return(
            <div style={{"textAlign":"center","width":"100%","color":"blue","height":"80%"}}>
                <h2>NewIt Component</h2> 
                <div>
                    <NewIt/>
                </div>
            </div>
        )
    }
}
export default NewIt;

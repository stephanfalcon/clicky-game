import React from "react"
import Box from "./box"
import Game from "./game"
function Container(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <div>
                    <h1>clicky Game</h1>
                    <Game />
                    </div>
                    
                    </div>
                <div className="col-lg-1"></div>
            </div>
            
        </div>
    )
}

export default Container
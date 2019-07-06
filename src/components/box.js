import React from "react"
import Game from "./game.js"

class box extends React.Component{
    constructor(){
        super()
        this.state = {clicked:false}
    }
    

    render(){
        return(
        <div className="box" onClick={this.clickHandle} data-state={this.state.clicked} key={this.props.img}>
            <img src={this.props.img} alt=""/>
        </div>
        )
    }
    clickHandle = (e) => {
        this.check(this)

        console.log(e.target)
        this.setState({clicked:true})
    }    
    check = function (what){
        if(what.state.clicked !== true){
        }else{
            return false
        }
    }
    lose(){
        console.log("you lose")
    }
    scramble(){
       
    }
}

export default box
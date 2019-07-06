import React from "react"
import Box from "./box"
import boxes from "./boxes"

class game extends React.Component{
    render(){
        // console.log(this.loop())
        this.loop()
        return(
            <div onClick={console.log(this)}>
                <this.loop />
            </div>
        )
    }

    
    loop = () => {
        var arr = boxes.urls.map(
            x => <Box img ={x.url}/>
            
        )
        return (<div className="row">
            {console.log(arr)}
            {arr}
        </div>)
    }
    afterClick = () =>{

    }
    shuffle = () => {
        console.log(this.data.state)
    }
}


export default game
import Details from "./Details"
import React, {useState} from "react";

function Tile({props}) {
    const [isOn, setIsOn] = useState(false);
    
    function handleClick(){
        setIsOn((isOn) => !isOn);
    }


    return(
        <div className="tile">
            <h1>{props.name}</h1>
            <img onClick={handleClick} src={props.image} alt={props.image}></img>
            {isOn ? <Details props={props}/> : null}
        </div>
    )
}

export default Tile;
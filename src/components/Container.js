import Tile from './Tile';
import React, {useState} from 'react';

function Container({hogs}){
   const [isGreased, setIsGreased] = useState(false);
   const [newHogs, setNewHogs] = useState(hogs);
  
   function handleFilter(greased){
    const newHogArray = hogs.filter((props) => props.greased !== greased)
    
   }




    //     setIsGreased(!isGreased);

//     if(event.target.checked){
//         const isFiltered = isGreased.filter(props => {props.greased})
//         setNewHogs(isFiltered);
//     }
//    }

    return(
        <div>
            <input onClick={handleFilter} checked={isGreased} type="checkbox" id="filter"></input>
            <input type="checkbox" id="sort"></input>
            {hogs.map(props => <Tile props={props}/>
            )}
        </div>        
    )
}

export default Container
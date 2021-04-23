import React from "react";
import FavLakeCard from "./FavLakeCard";

function LakePersonList( {list, name}){
    console.log(list, name)
    
    if( list == undefined){
        return <h1></h1>
    }
    return(
        <div>
            <h1>{name}</h1>
           {list.map((lake)=>(
            
        <FavLakeCard key={lake.id} lake={lake}/> 
    
    ))}
            {/* {favorites} */}
        </div>
    )
}

export default LakePersonList;
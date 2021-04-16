import React from "react";
import AddLake from "./AddLake";
import LakeCard from "./LakeCard";

function LakeList({lakesArr}){
    
    const lakeCards = lakesArr.map((lake)=>{
        return <LakeCard key={lake.id} lake={lake}/>
    })
    return(
        <div>
            <AddLake/>
            {lakeCards}
        </div>
    )
}

export default LakeList;
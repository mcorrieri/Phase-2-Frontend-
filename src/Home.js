import React from "react";
import LakePersonList from "./LakePersonList";
import LakeList from "./LakeList";

function Home({lakesArr}){
    return(
        <div>
            <LakeList lakesArr={lakesArr}/>
            <LakePersonList/>
        </div>
    )
}

export default Home;
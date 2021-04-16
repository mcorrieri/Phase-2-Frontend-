import React from "react";

function LakeCard({lake}){
    
    console.log(lake)
    const {name, image, location, description, visits, link} = lake;
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <h3>{location}</h3>
            <p>{description}</p>
            <button>{visits}</button>
            <a href={link}>More Info</a>
        </div>
    )
}

export default LakeCard;
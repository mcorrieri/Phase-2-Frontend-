import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function LakeDetails(){
    const [haveVisited, setHaveVisited] = useState(false);
    const [lake, setLake] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/lakes/${id}`)
        .then(res => res.json())
        .then((lake)=>{
            setLake(lake)
            setIsLoaded(true)
        })
    }, [id])
    
    if (!isLoaded) return <h2>Loading...</h2>;

    const {name, image, location, description, link} = lake;

  
    return(
        <div>
            <title>{name}</title>
            <img src={image} alt={name}/>
            <h3>{location}</h3>
      <p>{description}</p>
      <button onClick={() => setHaveVisited(!haveVisited)}>
        {haveVisited ? "Down to Visit 😏" : "No thanks 🙄"}
      </button>
      <a href={link}>More Info</a>
        </div>
    )
}

export default LakeDetails;
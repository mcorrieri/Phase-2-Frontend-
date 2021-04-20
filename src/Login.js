import React, {useState} from "react";

function Login({onLogin}){
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3000/lakePerson?name=${name}`)
        .then(r => r.json())
        .then((users) => {
            if (users.length > 0) {
                onLogin(users[0])
            }
        })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={name}>Name</label>
                <input id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input type="submit" value="Start your lake love journey"/>
            </form>
        </div>
    )
}

export default Login;
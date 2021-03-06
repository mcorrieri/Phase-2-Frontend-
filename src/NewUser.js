import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "./components/Button";
import BackgroundImg from "./components/BackgroundImg";
import DivContent from "./components/DivContent";

function NewUser({ handleAddUser, onLogin }) {
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/lakePerson`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        favLakes: []
      }),
    })
      .then((r) => r.json())
      .then((newName) => {
        console.log(newName)
        handleAddUser(newName);
        onLogin(newName);
        history.push("/home");
        setName("");
      });
  }

  return (
    <BackgroundImg>
      <DivContent>
        <Button>
          <Link to={`/`}>Login</Link>
        </Button>
        <h2>SIGN UP!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor={name}>Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input type="submit" value="Start your lake love journey" />
        </form>
      </DivContent>
    </BackgroundImg>
  );
}
export default NewUser;

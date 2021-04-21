import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewUser({ handleAddUser }) {
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/lakePerson`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((r) => r.json())
      .then((newName) => {
        handleAddUser(newName);
        history.push("/home");
        setName("");
      });
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input type="submit" value="Start your lake love journey" />
      </form>
    </div>
  );
}
export default NewUser;

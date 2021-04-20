import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NewUser from "./NewUser";

function Login({ handleAddUser }) {
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/lakePerson?name=${name}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length > 0) {
          //   onLogin(users[0]);
          history.push("/");
        }
      });
  }

  function handleNewUser() {
    return <NewUser handleAddUser={handleAddUser} />;
  }

  return (
    <div>
      <button onClick={handleNewUser}>Create New Account</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input type="submit" value="Continue your lake love journey" />
      </form>
    </div>
  );
}

export default Login;

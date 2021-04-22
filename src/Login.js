import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "./components/Button";

function Login() {
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/lakePerson?name=${name}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length > 0) {
          history.push("/home");
        }
      });
  }

  return (
    <div>
      <Button>
        <Link to={`/signup`}>Create New Account</Link>
      </Button>
      <h2>LOGIN</h2>
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

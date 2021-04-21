import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
      <button>
        <Link to={`/signup`}>Create New Account</Link>
      </button>

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

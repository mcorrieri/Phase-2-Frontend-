import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "./components/Button";
import BackgroundImg from "./components/BackgroundImg";
import DivContent from "./components/DivContent";

function Login({onLogin}) {
  const [name, setName] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/lakePerson?name=${name}`)
      .then((r) => r.json())
      .then((user) => {
        if (user.length > 0) {
          console.log(user[0])
          onLogin(user[0]);
          history.push("/home");
        }
      });
  }

  return (
    <BackgroundImg>
      <DivContent>
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
      </DivContent>
    </BackgroundImg>
  );
}

export default Login;

/* form {
  background-color: grey;
} */

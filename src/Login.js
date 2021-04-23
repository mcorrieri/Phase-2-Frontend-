import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "./components/Button";
import styled from "styled-components";

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

const BackgroundImg = styled.div`
  background-image: url("background_pic.jpg");
  height: 400px;
  width: 400px;
  border-radius: 50%;
  margin: 10% auto auto auto;
`;

const DivContent = styled.div `
  text-align: center;
  position: relative;
  top: 25%;
  `;




/* form {
  background-color: grey;
} */
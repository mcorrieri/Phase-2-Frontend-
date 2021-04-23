import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function AddLake({ onAddNewLake }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name,
      image: image,
      location: location,
      link: link,
      description: description,
    };
    fetch(`http://localhost:3000/lakes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newLake) => {
        onAddNewLake(newLake);
        setName("");
        setImage("");
        setLocation("");
        setLink("");
        setDescription("");
        history.push("/home");
      });
  }

  return (
    <BackgroundDiv>
      <LakeForm onSubmit={handleSubmit}>
        <FormInput
          placeholder="  Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <FormInput
          placeholder="  Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <FormInput
          placeholder="  Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <FormInput
          placeholder="  Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <br />
        <FormInput
          placeholder="  Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <SubmitBtn type="submit" value="Add New Lake" />
      </LakeForm>
    </BackgroundDiv>
  );
}

export default AddLake;

const LakeForm = styled.form`
  text-align: center;
  margin: 50px;
`;

const FormInput = styled.input`
  width: 400px;
  border-radius: 25px;
  height: 25px;
  margin: 5px;
`;

const SubmitBtn = styled.input`
  cursor: pointer;
  background: rgba(84, 149, 167, 0.7);
  font-size: 16px;
  border-radius: 3px;
  color: darkblue;
  border: 2px solid darkblue;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: darkblue;
    color: white;
  }
`;

const BackgroundDiv = styled.div`
  background-image: url("lake-lure-NC.jpg");
`;

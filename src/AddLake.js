import React, { useState } from "react";

function AddLake({ onAddNewLake }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

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
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Add New Lake" />
      </form>
    </div>
  );
}

export default AddLake;

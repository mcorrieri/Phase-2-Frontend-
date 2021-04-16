import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";

function App() {
  const [lakesArr, setLakesArr] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/lakes`)
      .then((res) => res.json())
      .then((lakes) => {
        setLakesArr(lakes);
      });
  }, []);

  function handleAddLake(newLake) {
    const updatedLakeArr = [...lakesArr, newLake];
    setLakesArr(updatedLakeArr);
  }

  return (
    <div>
      <Header />
      <Home lakesArr={lakesArr} onAddNewLake={handleAddLake} />
      <Login />
    </div>
  );
}

export default App;

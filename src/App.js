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

  function handleDeleteLake(deletedLake){
    const newLakeArr = lakesArr.filter((lake) => lake !== deletedLake)
    setLakesArr(newLakeArr)
  }

  return (
    <div>
      <Header />
      <Home lakesArr={lakesArr} onAddNewLake={handleAddLake} onDeleteLake={handleDeleteLake}/>
      <Login />
    </div>
  );
}

export default App;

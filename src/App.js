import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import LakeCard from "./LakeCard";

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

  function handleDeleteLake(deletedLake) {
    const newLakeArr = lakesArr.filter((lake) => lake !== deletedLake);
    setLakesArr(newLakeArr);
  }

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home
              lakesArr={lakesArr}
              onAddNewLake={handleAddLake}
              onDeleteLake={handleDeleteLake}
            />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/lakes/:id">
            <LakeCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

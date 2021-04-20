import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import LakeDetails from "./LakeDetails";

function App() {
  const [lakesArr, setLakesArr] = useState([]);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    fetch(`http://localhost:3000/lakes`)
    .then((res) => res.json())
    .then((lakes) => {
      setLakesArr(lakes);
    });
  }, []);
  
  function handleLogin(newUser){
    setUser(newUser);
  }

  if(!user) {
    return <Login onLogin={handleLogin}/>
  }

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
        <Switch>
          <Route exact path="/login">
            <Login onLogin={handleLogin}/>
          </Route>
          <Route exact path="/">
            <Home
              lakesArr={lakesArr}
              onAddNewLake={handleAddLake}
              onDeleteLake={handleDeleteLake}
            />
          </Route>
          <Route exact path="/lakes/:id">
            <LakeDetails />
          </Route>
          <Route path="*"><h1>404 WRONG</h1></Route>
        </Switch>
    </div>
  );
}

export default App;

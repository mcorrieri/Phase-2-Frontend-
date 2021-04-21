import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import LakeDetails from "./LakeDetails";
import NewUser from "./NewUser";
import AddLake from "./AddLake";

function App() {
  const [lakesArr, setLakesArr] = useState([]);
  // const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/lakes`)
      .then((res) => res.json())
      .then((lakes) => {
        setLakesArr(lakes);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/lakePerson`)
      .then((res) => res.json())
      .then((lakePerson) => {
        setUserArr(lakePerson);
      });
  }, []);

  function handleAddUser(newUser) {
    const updatedUserArr = [...userArr, newUser];
    setUserArr(updatedUserArr);
  }

  // function handleLogin(newUser) {
  //   setUser(newUser);
  // }

  function handleAddLake(newLake) {
    const updatedLakeArr = [...lakesArr, newLake];
    setLakesArr(updatedLakeArr);
  }

  function handleDeleteLake(deletedLake) {
    const newLakeArr = lakesArr.filter((lake) => lake !== deletedLake);
    setLakesArr(newLakeArr);
  }

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  const header = (
    <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
  );

  return (
    <div>
      {/* <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} /> */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          {header}
          <NewUser handleAddUser={handleAddUser} />
        </Route>
        <Route exact path="/home">
          {header}
          <Home lakesArr={lakesArr} onDeleteLake={handleDeleteLake} />
        </Route>
        <Route exact path="/lakes/:id">
          {header}
          <LakeDetails />
        </Route>
        <Route exact path="/newlake">
          {header}
          <AddLake onAddNewLake={handleAddLake} />
        </Route>
        <Route path="*">
          <h1>404 WRONG</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

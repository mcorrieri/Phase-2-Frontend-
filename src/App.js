import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import LakeDetails from "./LakeDetails";
import NewUser from "./NewUser";
import AddLake from "./AddLake";
import Wrapper from "./components/Wrapper";

function App() {
  const [lakesArr, setLakesArr] = useState([]);
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
 
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <Wrapper>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <NewUser handleAddUser={handleAddUser}/>
        </Route>
        <Route exact path="/home">
          <Home lakesArr={lakesArr} onDeleteLake={handleDeleteLake} onDarkMode={isDarkMode}/>
        </Route>
        <Route exact path="/lakes/:id">
          <LakeDetails />
        </Route>
        <Route exact path="/newlake">
          <AddLake onAddNewLake={handleAddLake} />
        </Route>
        <Route path="*">
          <h1>404 WRONG</h1>
        </Route>
      </Switch>
      </Wrapper>
    </div>
  );
}

export default App;
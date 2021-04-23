import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import LakeDetails from "./LakeDetails";
import NewUser from "./NewUser";
import AddLake from "./AddLake";
import Wrapper from "./components/Wrapper";
import LakePersonList from "./LakePersonList";

function App() {
  const [lakesArr, setLakesArr] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userArr, setUserArr] = useState([]);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserLakes, setCurrentUserLakes] = useState(null);

  
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
    
    function handleCurrentUser(user){
      setCurrentUserName(user.name);
      setCurrentUserId(user.id)
      setCurrentUserLakes(user.favLakes);
    }

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

    function handleLogOut(){
      setCurrentUserId(null);
      setCurrentUserName(null);
      setCurrentUserLakes(null);
    }
        // console.log(currentUserName, currentUserId, currentUserLakes)


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} user={currentUserName} id={currentUserId}/>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Login onLogin={handleCurrentUser}/>
          </Route>
          <Route exact path="/signup">
            <NewUser handleAddUser={handleAddUser} onLogin={handleCurrentUser}/>
          </Route>
          <Route exact path="/home">
            <Home
              lakesArr={lakesArr}
              onDeleteLake={handleDeleteLake}
              onDarkMode={isDarkMode}
              onLogOut={handleLogOut}
              
            />
          </Route>
          <Route exact path="/lakes/:id">
            <LakeDetails onFavList={setCurrentUserLakes} favList={currentUserLakes}/>
          </Route>
          <Route exact path="/newlake">
            <AddLake onAddNewLake={handleAddLake} />
          </Route>
          <Route exact path="/lakePerson/:id">
            <LakePersonList list={currentUserLakes} name={currentUserName}/>
          </Route>
          {/* <Route exact path="lakePerson/:id" component={() => 
          <LakePersonList name={currentUserName} list={currentUserLakes}/> }/> */}
          <Route path="*">
            <h1>404 WRONG</h1>
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;

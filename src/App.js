import './App.css';
import MainContext from "./Context/MainContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import CreatePostPage from "./Pages/CreatePostPage";
import RegistrationPage from "./Pages/RegistrationPage";
import {useState} from "react";
import Toolbar from "./Components/Toolbar";

function App() {

    const [getUsers, setUsers] = useState([])
    const [getPage, setPage] = useState("")



  return (
    <div className="App">

      <MainContext.Provider value={{getUsers, setUsers, getPage, setPage}}>
          <BrowserRouter>
              <Toolbar/>
             <Routes>
                 <Route path={"/"} elelement={<HomePage />}/>
                 <Route path={"/register"} elelement={<RegistrationPage />}/>
                 <Route path={"/login"} elelement={<LoginPage/>}/>



             </Routes>


          </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;

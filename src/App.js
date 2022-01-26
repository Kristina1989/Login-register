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
    const [getLoged, setLoged] = useState(null)
    const [getPost, setPost] = useState([])



  return (
    <div className="App">

      <MainContext.Provider value={{getUsers, setUsers,
          getPage, setPage,
          getLoged, setLoged,
          getPost, setPost
      }}>
          <BrowserRouter>
              <Toolbar/>
             <Routes>
                 <Route path={"/"} element={<HomePage />}/>
                 <Route path={"/register"} element={<RegistrationPage />}/>
                 <Route path={"/login"} element={<LoginPage/>}/>
                 <Route path={"/main"} element={<MainPage/>}/>
                 <Route path={"/posts"} element={<CreatePostPage/>}/>





             </Routes>


          </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;

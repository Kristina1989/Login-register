import {useContext} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";


const Toolbar = () => {

    const {getPage} = useContext(MainContext)
    const {setPage} = useContext(MainContext)
    const nav = useNavigate()



    function goTo (address) {
        setPage(address)
        nav(address)

    }
    return (
        <div className="toolbar d-flex ">
            {getPage === "/main" && <h2 className="p10 " onClick={() => goTo("/posts")}>CREATE POST</h2>}
            {getPage !== "/register" && <h2 className="p10 " onClick={() => goTo("/register")}>REGISTRATION</h2>}
            {getPage !== "/login" && <h2 className="p10" onClick={() => goTo("/login")}>LOGIN</h2>}

        </div>
    );
};

export default Toolbar;
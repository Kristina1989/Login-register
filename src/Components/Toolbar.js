import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";


const Toolbar = () => {

    const {getPage} = useContext(MainContext)
    const {setPage} = useContext(MainContext)



    function goTo (address) {
        setPage(address)

    }
    return (
        <div className="toolbar d-flex ">
            {getPage !== "/register" && <h2 className="p10 " onClick={() => goTo("/register")}>REGISTRATION</h2>}
            {getPage !== "/login" && <h2 className="p10" onClick={() => goTo("/login")}>LOGIN</h2>}

        </div>
    );
};

export default Toolbar;
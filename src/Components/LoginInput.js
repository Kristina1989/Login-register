import {useContext, useRef} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const LoginInput = () => {

    const nav = useNavigate()

    const userNameRef = useRef()
    const PasswordRef = useRef()


    const {getUsers, setLoged} = useContext(MainContext)


    function login() {
        const registered = getUsers.find(x => x.userName === userNameRef.current.value && x.passOne === PasswordRef.current.value)
        console.log(registered)
        setLoged(registered)
        nav("/main")



    }


    return (
        <div>
            <input type="text" ref={userNameRef} placeholder="UserName"/>
            <input type="text" ref={PasswordRef} placeholder="Password"/>

            <button onClick={login}>Login</button>

        </div>
    );
};

export default LoginInput;
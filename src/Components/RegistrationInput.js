import {useContext, useRef} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const RegistrationInput = () => {
    const nav = useNavigate()

    const userNameRef = useRef()
    const PassOneRef = useRef()
    const PassTwoRef = useRef()

    const {getUsers, setUsers} = useContext(MainContext)


    function register() {
        const user = {
            userName: userNameRef.current.value,
            passOne: PassOneRef.current.value,
            passTwo: PassTwoRef.current.value
        }

        if (user.userName.length < 5 || user.userName.length > 10) return
        if (user.passOne.length < 3 || user.passOne.length > 10) return
        if (user.passOne !== user.passTwo) return

        setUsers([...getUsers, user])
        nav("/login")



    }




    return (
        <div className="d-flex a-center j-center column box">
            <input type="text" ref={userNameRef} placeholder="UserName"/>
            <input type="password" ref={PassOneRef} placeholder="Password"/>
            <input type="password" ref={PassTwoRef} placeholder="Confirm Password"/>
            <button onClick={register}>Register</button>
        </div>
    );
};

export default RegistrationInput;
import {useContext, useRef} from 'react';
import MainContext from "../Context/MainContext";
import {useNavigate} from "react-router-dom";

const RegistrationInput = () => {

    const userNameRef = useRef()
    const PassOneRef = useRef()
    const PassTwoRef = useRef()

    const {getUsers, setUsers} = useContext(MainContext)
    const nav = useNavigate()


    function register() {

        if (PassOneRef.current.value === PassTwoRef.current.value) {

            const user = {
                userName: userNameRef.current.value,
                passOne: PassOneRef.current.value,
                passTwo: PassTwoRef.current.value
            }
            setUsers([...getUsers, user])
            nav("/login")
            console.log(getUsers)
        }

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
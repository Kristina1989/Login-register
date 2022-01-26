import {useContext, useRef} from 'react';
import MainContext from "../Context/MainContext";

const RegistrationInput = () => {

    const userNameRef = useRef()
    const PassOneRef = useRef()
    const PassTwoRef = useRef()

    const {getUsers} = useContext(MainContext)
    const {setUsers} = useContext(MainContext)

    function register () {
        const user = {
            userName: userNameRef.current.value,
            passOne: PassOneRef.current.value,
            passTwo: PassTwoRef.current.value
        }

        if(user.userName.length < 5 || user.userName.length > 10) return
        if(user.passOne.length < 3 || user.passOne.length > 10) return
        if(user.passOne !== user.passTwo) return

        setUsers([...getUsers, user])

    }

    return (
        <div>
            <input value="" type="text" ref={userNameRef} placeholder="UserName"/>
            <input value="" type="text" ref={PassOneRef} placeholder="Password"/>
            <input value="" type="text" ref={PassTwoRef} placeholder="Confirm Password"/>
            <button onClick={register}>Register</button>
        </div>
    );
};

export default RegistrationInput;
import {useContext, useRef} from 'react';
import MainContext from "../Context/MainContext";

const LoginInput = () => {



    return (
        <div>
            <input type="text" ref={userNameRef} placeholder="UserName"/>
            <input type="text" ref={PassOneRef} placeholder="Password"/>
            <input type="text" ref={PassTwoRef} placeholder="Confirm Password"/>
            <button onClick={register}>Register</button>

        </div>
    );
};

export default LoginInput;
import "./signup.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const username = useRef();
    const email = useRef();
    const password = useRef()
    const passwordAgain = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match")
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            // try{
            //     // await axios.post("/auth/signup", user);

            // }catch(err{

            // })
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TreeHole</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on TreeHole.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" ref={username} className="loginInput" required/>
                        <input placeholder="Email" ref={email} className="loginInput" type="email" required/>
                        <input placeholder="Password" ref={password} className="loginInput" minLength="6" type="password" required/>
                        <input placeholder="Password Again" ref={passwordAgain} className="loginInput" minLength="6" type="password" required/>

                        {/* Send signup request to backend */}
                        <button type="submit" className="loginButton">Sign Up</button>

                        <Link to="/" style={{ textDecoration: 'none' }} >
                            {/*!FIXME goes to homepage for now */}
                            <button className="loginRegisterButton">
                                Log into Account
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
}

// Reference:
// https://youtu.be/pFHyZvVxce0

import "./login.css"
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

// Login page
export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching } = useContext(AuthContext);

    const handleClick = (data) => {
        axios
        .post(
        'http://localhost:8000/auth/login', 
        data, 
        { headers: {"content-type": "application/json"} }
        )
        .then((res) => {
            let token_deserialized=JSON.stringify(res.data.data);
            if(res.status){
                localStorage.clear()
                localStorage.setItem('token',token_deserialized);
                localStorage.setItem('email',data.email);
                //console.log(localStorage.getItem('token'));
                window.location.href = "/home";
        }
        })
        .catch(()=>{
            localStorage.clear();
            alert("Incorrect Password or Username");
        });
    };

    return (
        <body>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TreeHole</h3>
                    <span className="loginDesc">
                        a web-based anonymous social space
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        {/* Forgot Password is an optional Feature to implement */}
                        {/* <span className="loginForgot">Forgot Password?</span> */}
                        <Link to="/signup">
                            <button className="loginRegisterButton">
                                {isFetching ? (
                                    <CircularProgress color="white" size="20px" />
                                ) : (
                                    "Sign Up"
                                )}
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
        </body>
    );
}
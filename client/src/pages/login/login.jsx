/* Reference:
* https://youtu.be/pFHyZvVxce0
* https://dev.to/hosenur/obfuscate-reveal-text-animation-in-react-using-bafflejs-14c9
*/
import "./login.css"
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

import axios from "axios";
import baffle from "baffle";


// Login page
export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching } = useContext(AuthContext);
    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value,
        };
        axios
            .post(
                'http://localhost:8000/auth/login',
                data,
                { headers: { "content-type": "application/json" } }
            )
            .then((res) => {
                // let token_deserialized=JSON.stringify(res.data);
                if (res.status) {
                    localStorage.clear()
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('username', res.data.name);
                    // localStorage.setItem('username',data.name);
                    //console.log(localStorage.getItem('token'));
                    window.location.href = "/home";
                }
            })
            .catch(() => {
                localStorage.clear();
                alert("Incorrect Password or Username");
            });
    };

    // Use useEffect hook to start the animation.
    useEffect(() => {
        const target = baffle('.col_obfuscated');
        target.set({
            characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
            speed: 70
        })
        target.start()
        //param reveal(duration, delay)
        target.reveal(10000, 2000)
    })

    return (

        // <body>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">TreeHole</h3>
                        <span className="loginDesc">
                            an
                        </span>
                        <div className="col_obfuscated">
                            anonymous
                        </div>
                        <span className="loginDesc">
                            social space
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
                                minLength="8"
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
                            <Link to="/signup" className="loginButton" >
                                <button className="loginButton">
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
        // </body>
    );
}

import "./signup.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const username = useRef();
    const email = useRef();
    const password = useRef()
    const passwordAgain = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match")
        } else {
            //
            const user = {
                name: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            axios
                .post("http://localhost:8000/users/signup", user)
                .then(() => {
                    alert("Signup Successful! Redirecting to Login Page");
                    window.location.href = "/login";
                })
                .catch(() => {
                    alert("Try Another Username!")
                });
        }
    };

    return (
        <body>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">TreeHole</h3>
                        <span className="loginDesc">
                            Connect and Post
                        </span>
                    </div>
                    <div className="loginRight">
                        <form className="signupBox" onSubmit={handleClick}>
                            <input placeholder="Username" ref={username} className="loginInput" minLength="3" maxLength="20" required />
                            <input placeholder="Email" ref={email} className="loginInput" type="email" minLength="5" maxLength="225" required />
                            <input placeholder="Password" ref={password} className="loginInput" minLength="8" maxLength="300" type="password" required />
                            <input placeholder="Password Again" ref={passwordAgain} className="loginInput" minLength="8" maxLength="300" type="password" required />

                            {/* Send signup request to backend */}
                            <button type="submit" className="loginButton">Confirm</button>


                            <Link to="/login" className="loginButton" style={{ textDecoration: "none", color: "white" }} >
                                <button className="loginButton">
                                    Back to Login
                                </button>
                            </Link>


                        </form>

                    </div>
                </div>
            </div>
        </body >
    );
}

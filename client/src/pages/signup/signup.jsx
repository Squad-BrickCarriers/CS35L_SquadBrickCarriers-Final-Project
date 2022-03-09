import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setpasswordAgain] = useState("")


    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain !== password) {
            alert("Passwords don't match");
        } else {
            //
            const user = {
                name: username,
                email: email,
                password: password,
            };
            axios
                .post("http://localhost:8000/users/signup", user)
                .then(() => {
                    alert("Signup Successful! Redirecting to Login Page");
                    window.location.href = "/login";
                })
                .catch(() => {
                    alert("Try Another Username!");
                });
        }
    };

    return (
        // <body>
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">TreeHole</h3>
                        <span className="loginDesc">
                            Share and connect on TreeHole
                        </span>
                    </div>
                    <div className="loginRight">
                        <form className="signupBox" onSubmit={handleClick}>
                            <input placeholder="Username" onChange={(w) => { setUsername(w.target.value) }} className="loginInput" minLength="3" maxLength="20" required />
                            <input placeholder="Email" onChange={(w) => { setEmail(w.target.value) }} className="loginInput" type="email" minLength="5" maxLength="225" required />
                            <input placeholder="Password" onChange={(w) => { setPassword(w.target.value) }} className="loginInput" minLength="8" maxLength="300" type="password" required />
                            <input placeholder="Password Again" onChange={(w) => { setpasswordAgain(w.target.value) }} className="loginInput" minLength="8" maxLength="300" type="password" required />

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
        // </body >
    );
}

import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
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
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />

                        {/* Send signup request to backend */}
                        <button className="loginButton">Sign Up</button>

                        <Link to="/" >
                            {/*!FIXME goes to homepage for now */}
                            <button className="loginRegisterButton">
                                Log into Account
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
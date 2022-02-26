// import Topbar from "../../components/topbar/Topbar";
// import Margin from "../../components/margin/Margin";
// import Feed from "../../components/feed/Feed";
// import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./login.css"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper"></div>
            <div className="loginLeft"></div>
            <h3 className="loginLogo">TreeHole</h3>
            <span className="loginDesc">
                loginDescPlaceHolder fixme.
            </span>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <Link to="/"className="loginButton" >
                        <button className="loginButton">
                            Login
                        </button>
                    </Link>

                     {/* FIXME add Forgot Password page */}
                    <span className="loginForgot">Forgot Password?</span>

                    {/* FIXME do the signup format */}
                    <Link to="/signup" >
                        <button className="loginSignupButton" >
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
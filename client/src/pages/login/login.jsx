// import Topbar from "../../components/topbar/Topbar";
// import Margin from "../../components/margin/Margin";
// import Feed from "../../components/feed/Feed";
// import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./login.css"
import { Link } from "react-router-dom";
import { useRef } from "react";

// Login page
export default function Login() {
    const email = useRef();
    const password = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        
    };

    return (
        <div className="login">
            <div className="loginWrapper"></div>
            <div className="loginLeft"></div>
            <h3 className="loginLogo">TreeHole</h3>
            <span className="loginDesc">
                loginDescPlaceHolder fixme.
            </span>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input 
                    placeholder="Email" 
                    className="loginInput" 
                    type="email" 
                    ref="email"
                    required
                    />
                    <input 
                    placeholder="Password" 
                    className="loginInput" 
                    type="password" 
                    ref="password"
                    minLength="6"
                    required
                    />
                    <Link to="/"className="loginButton" >
                        <button className="loginButton">
                            Login
                        </button>
                    </Link>

                     {/* FIXME add Forgot Password page */}
                    <span className="loginForgot">Forgot Password?</span>

                    {/* FIXME do the signup format */}
                    <Link to="/signup" style={{ textDecoration: 'none' }} >
                        <button className="loginSignupButton" >
                            Sign Up
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
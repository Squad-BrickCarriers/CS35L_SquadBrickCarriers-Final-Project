// import Topbar from "../../components/topbar/Topbar";
// import Margin from "../../components/margin/Margin";
// import Feed from "../../components/feed/Feed";
// import Scrollbar from "../../components/scrollbar/Scrollbar";
import "./login.css"

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
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <botton className="loginSignupButton">Sign Up</botton>
                </div>
            </div>
        </div>
    );
}
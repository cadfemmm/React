import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Signin.css";
import BG from "../assets/bg1.jpg";
import Loginnav from "../components/Loginnav";
import PizzaLeft from "../assets/hero.webp";
import { API_URL } from "../platform/config/api.config";
import api, { setAccessToken } from "../shared/api/apiClient";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

const handleLogin = async() => {
  let response
  try {
    response = await api.post(API_URL.LOGIN, { 
      email_or_username: username, 
      password: password }, { withCredentials: true });
    setAccessToken(response.data);
  } catch (error) {
    alert(error.response?.data?.message?.[0]);
    return;
  }

  let redirectPath = "/Home"; // default path
  let userRole = "";
  redirectPath = "/Doctor";

  const user = response.data.user
  userRole = user?.user_role?.name;
  // Store login info for later use
  localStorage.setItem("username", user.user_name);
  localStorage.setItem("userRole", user?.user_role?.name);
  localStorage.setItem("user_id", user.user_id)
  history.push(redirectPath);
};

  const handleSignUp = () => {
    history.push("/Signup");
  };

  return (
    <div
      className="auth-bg"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Loginnav />
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-left">
            <div style={{backgroundColor:"#3A3FAD"}}>
            <h2 style={{color:"#fff",marginLeft:"20px",lineHeight:"2em"}}className="auth-title">LOGIN</h2></div>
            <form onSubmit={(e) => e.preventDefault()} className="auth-form">
              <label htmlFor="username" className="auth-label">
                User Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="auth-input"
                placeholder="Enter your username"
              />

              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                placeholder="Enter your password"
              />

              <div className="auth-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="auth-right">
            <img src={PizzaLeft} alt="Healthcare" className="auth-hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

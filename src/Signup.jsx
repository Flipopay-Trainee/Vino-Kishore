import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/logins", user)
      .then((res) => {
        console.log("Signed in successfully");
        alert("Signed in bro ");

        navigate("/login");
      })

      .catch((error) => {
        console.log("try again", error);
        alert("try again bro");
      });
  };
  return (
    <div>
      <div>
        <div className="Signup-container">
          <h2>Sign up</h2>
          <form className="Signup-form" onSubmit={handleSubmit}>
            <div className="signup-form">
              <label>User Name:</label>
              <input
                className="User-Name"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="User Name"
                required
              />
            </div>
            <div className="signup-form">
              <label>Email:</label>
              <input
                className="password-box"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="@gmail.com"
              />
            </div>
            <div className="Signup-form">
              <label>Password:</label>
              <input
                className="password-box"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="******"
                required
              />
            </div>
            <div className="Signup-form">
              <label>Confirm Password:</label>
              <input
                className="password-box"
                type="password"
                name="confirm"
                value={user.confirm}
                onChange={handleChange}
                placeholder="******"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Sign up
            </button>
            <p>or</p>
            <a href="/Login">Already have an account</a>
          </form>
        </div>
      </div>
    </div>
  );
}

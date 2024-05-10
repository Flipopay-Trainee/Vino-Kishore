import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;     
    try {
      const response = await axios.get("http://localhost:3000/logins");
      const logins = response.data;
      const user = logins.find((user) => user.email === email && user.password === password);

      if (user) {
        alert("login successful");
        navigate("/chatbot");
      } else {
        alert("invalid email or password");
      }
    } catch (error) {
      console.log("error", error);
      
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Get in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="password-box"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="@gmail.com"
            required
          />
        </div>
        <div className="login-form">
          <label>Password:</label>
          <input
            className="password-box"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="******"
            required
          />
        </div>
        <button type="submit" className="submit-btn1">
          Let's Go
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

"use client";

import { useState } from "react";
import "@/app/globals.css";

export default function LoginPage() {
  const [mode, setMode] = useState<"admin" | "user">("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Logging in as:", mode, username, password);
  };

  return (
    <div className="loginPage">
      <div className="loginPage__card">
        <h2>Sign In</h2>

        <div className="loginPage__toggle">
          <button
            className={mode === "admin" ? "active" : ""}
            onClick={() => setMode("admin")}
          >
            Login as Admin
          </button>

          <button
            className={mode === "user" ? "active" : ""}
            onClick={() => setMode("user")}
          >
            Login as User
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <label className="loginPage__label">Username</label>
          <input
            className="loginPage__input"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="loginPage__label">Password</label>
          <input
            className="loginPage__input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="loginPage__loginBtn">
            Sign In »
          </button>
        </form>

        <div className="loginPage__footerLogo">FCN</div>
      </div>
    </div>
  );
}

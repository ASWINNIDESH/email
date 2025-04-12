import { useState } from "react";

export const LoginRegister = ({ setUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <> <div>
      <style>
        {`
          label {
            display: block;
            margin: 10px 0;
          }
          input {
            margin-left: 10px;
          }
          button {
            margin-top: 10px;
          }
          div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px;
          }
          h3 {
            margin: 0;
          }
          button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
          input[type="email"],
          input[type="password"],
          input[type="text"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
          }
          input[type="email"]:focus,
          input[type="password"]:focus,
          input[type="text"]:focus {
            border-color: #007bff;
            outline: none;
          }
          textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          textarea:focus {
            border-color: #007bff;
            outline: none;
          }
          .error {
            color: red;
            margin-top: 10px;
          }
          .success {
            color: green;
            margin-top: 10px;
          }
          .loading {
            color: blue;
            margin-top: 10px;
          }
          .hidden {
            display: none;
          }
          .visible {
            display: block;
          }
          .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}  
      </style>
      <label>
        Email:
        <input
          type="email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: loginEmail,
              password: loginPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.status != 200) {
                throw new Error("Login Failed!");
              }

              return response.json().then((data) => setUser(data));
            })
            .catch((error) => {
              console.error("Login failed:", error);
              alert("Login failed.");
            });
        }}
      >
        Login
      </button>

      <label>
        Name:
        <input
          type="text"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
              name: registerName,
              email: registerEmail,
              password: registerPassword,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.status != 200) {
                throw new Error("register not valid");
              }

              alert("Registration successful!");

              setRegisterName("");
              setRegisterEmail("");
              setRegisterPassword("");
            })
            .catch((error) => {
              console.error("Registration failed:", error);
              alert("Registration failed.");
            });
        }}
      >
        Register
      </button>
      </div>
    </>
  );
};
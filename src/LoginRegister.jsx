import { useState } from "react";

export const LoginRegister = ({ setUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <> <style>
      {`
        label {
          display: block;
          margin-bottom: 10px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
        button {
          margin-bottom: 10px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        label {
          font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"] {
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
          border-color: #007bff;
          outline: none;
        }
        input[type="text"]:disabled,
        input[type="email"]:disabled,
        input[type="password"]:disabled {
          background-color: #f5f5f5;
          cursor: not-allowed;
        }
        button:focus {
          outline: none;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        button:active {
          background-color: #0056b3;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
        button:disabled:hover {
          background-color: #ccc;
        }
        button:disabled:active {
          background-color: #ccc;
        }
        button:disabled:focus {
          box-shadow: none;
        }
        button:disabled:active {
          box-shadow: none;
        }
        button:disabled:hover {
          cursor: not-allowed;
        }
        button:disabled:focus {
          outline: none;
        }
        button:disabled:active {
          outline: none;
        }
        button:disabled:focus {
          box-shadow: none;
        }
        button:disabled:active {
          box-shadow: none;
        }
        button:disabled:hover {
          cursor: not-allowed;
        }
        button:disabled:focus {
          outline: none;
        }
        button:disabled:active {
          outline: none;
        } 
        button:disabled:focus {
          box-shadow: none;
        }
        button:disabled:active {
          box-shadow: none;
        }
        button:disabled:hover {
          cursor: not-allowed;
        }
        button:disabled:focus {
          outline: none;
        }
        button:disabled:active {
          outline: none;
        }
        button:disabled:focus {
          box-shadow: none;
        }
        button:disabled:active {
          box-shadow: none;
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
    </>
  );
};
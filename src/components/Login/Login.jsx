import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { AdminContext } from "../../App";

const app = initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPasserror] = useState("");
  const [admin, setAdmin] = useContext(AdminContext);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(async () => {}, []);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        fetch("https://aeolian-bottlenose-earthquake.glitch.me/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, email }),
        })
          .then((res) => res.json())
          .then((success) => {
            if (success) {
              alert("account created");
              setNewUser(false);
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sessionStorage.setItem("email", user.email);
        fetch("https://aeolian-bottlenose-earthquake.glitch.me/admin")
        .then(res => res.json())
        .then(data => {
          const isAdmin = data.find(
            (admin) => admin.email === sessionStorage.getItem("email")
          );
          setAdmin(isAdmin);
        })
        // console.log(res);
        
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const confirmPassword = (e) => {
    setConfirmPass(e.target.value);
    if (confirmPass !== password) {
      const errorMsg = "Password did not match...please try again...";
      setPasserror(errorMsg);
    } else {
      setConfirmPass(e.target.value);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <LoginContainer>
        <h4>{!newUser ? "Login" : "Create an account"}</h4>
        <form>
          {newUser && (
            <div>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Username or Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {newUser && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={confirmPassword}
              />
              <p className="text-danger">
                <small>{confirmPass !== password ? passError : ""}</small>
              </p>
            </div>
          )}
          {!newUser && (
            <div className="d-flex justify-content-between">
              <div>
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="#rememberMe">Remember Me</label>
              </div>
              <AnchorTag>Forgot Password</AnchorTag>
            </div>
          )}
          <div>
            <button
              onClick={newUser ? signUp : signIn}
              className="btn btn-primary btn-block"
            >
              {!newUser ? "Login" : "Create an account"}
            </button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <p>
              {!newUser ? "Don't have an account?" : "Already have an account?"}
            </p>
            <AnchorTag
              onClick={() => (!newUser ? setNewUser(true) : setNewUser(false))}
            >
              {!newUser ? "Create an account" : "Login"}
            </AnchorTag>
          </div>
        </form>
      </LoginContainer>
    </div>
  );
};

export default Login;

const LoginContainer = styled.div`
  padding: 40px;
  border: 1px solid lightgray;
  width: 600px;
  & h4 {
    margin-bottom: 50px;
  }
  & input[type="email"],
  & input[type="password"],
  & input[type="text"] {
    border: none;
    outline: none;
    width: 100%;
    border-bottom: 1px solid lightgray;
    margin-bottom: 40px;
    padding-bottom: 10px;
  }
`;

const AnchorTag = styled.p`
  text-decoration: underline;
  color: #6946f4;
  cursor: pointer;
`;

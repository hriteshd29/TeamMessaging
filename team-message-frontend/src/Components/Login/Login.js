import React, { useState } from "react";
import Styles from "./style.module.css";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";

let url =
  "https://react-node-quizconnection-3p34g88g4lkr3hmh5p.codequotient.in/";
const Login = () => {
  let fetcher = false;
  // if (fetcher === true) {
  //   const res = useFetch(url, "POST", saveValues);
  //   if (!res.response) {
  //     alert("LOADING......");
  //   } else {
  //     alert("Login SucessFull Successufll");
  //   }
  // }
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormValues((previousValues) => {
      return { ...previousValues, [e.target.name]: e.target.value };
    });
  };

  const [saveValues, setSaveValues] = useState([]);

  const clickHandler = (e) => {
    e.preventDefault();
    if (formValues.email && formValues.password) {
      const newValue = { ...formValues, id: new Date().getTime().toString() };
      setSaveValues((prevSaveValues) => {
        return [...prevSaveValues, newValue];
      });
      fetcher = true;
      setFormValues({ email: "", password: "" });
    } else {
      alert("Please Fill All Fields");
    }
  };

  return (
    <>
      <div className={Styles.overlay}>
        <form>
          <div className={Styles.con}>
            <header className={Styles.headForm}>
              <h2>Log In</h2>
              <p>login here using your Email and password</p>
            </header>
            <br />
            <div className={Styles.fieldSet}>
              <input
                className={Styles.formInput}
                type="email"
                value={formValues.email}
                name="email"
                placeholder="Email"
                onChange={changeHandler}
              />
              <br />
              <input
                className={Styles.formInput}
                type="password"
                placeholder="Password"
                value={formValues.password}
                name="password"
                onChange={changeHandler}
              />
              <br />
              <button
                className={`${Styles.logIn} ${Styles.btn}`}
                type="submit"
                onClick={clickHandler}
              >
                {" "}
                Log In{" "}
              </button>
            </div>
            <div className={Styles.other}>
              <Link to="/fogotPassword">
                {" "}
                <button
                  className={`${Styles.btn} ${Styles.submits} ${Styles.frgtPass}`}
                >
                  Forgot Password
                </button>
              </Link>
              <Link to="/register">
                <button
                  className={`${Styles.btn} ${Styles.submits} ${Styles.signUp}`}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

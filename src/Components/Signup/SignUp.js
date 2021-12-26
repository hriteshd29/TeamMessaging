import React, { useState, useEffect } from "react";
import Styles from "./style.module.css";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
let url = "http://localhost:8080";

const SignUp = () => {
  const res = useFetch(url);
  console.log(res, "hi");
  if (!res.response) {
    console.log("HI");
  }

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    gender: "male",
  });

  const [saveValues, setSaveValues] = useState([]);
  const changeHandler = (e) => {
    setFormValues((previousValues) => {
      return { ...previousValues, [e.target.name]: e.target.value };
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (
      formValues.email &&
      formValues.password &&
      formValues.name &&
      formValues.phone &&
      formValues.gender
    ) {
      const newValue = { ...formValues, id: new Date().getTime().toString() };
      setSaveValues((prevSaveValues) => {
        return [...prevSaveValues, newValue];
      });
      setFormValues({
        email: "",
        password: "",
        name: "",
        phone: "",
        gender: "male",
      });
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
              <h2>Register</h2>
              <p>
                Register here using your Name,Email and Password to use our
                Services
              </p>
            </header>
            <br />
            <div className={Styles.fieldSet}>
              <input
                className={Styles.formInput}
                type="text"
                value={formValues.name}
                name="name"
                placeholder="Enter your Name"
                onChange={changeHandler}
              />
              <br />
              <input
                className={Styles.formInput}
                type="tel"
                value={formValues.phone}
                name="phone"
                placeholder="Mobile No."
                onChange={changeHandler}
              />
              <br />
              <div className={`${Styles.registerRadioDiv} ${Styles.formInput}`}>
                <label className={Styles.formLabel}>Gender : </label>

                <input
                  className={Styles.formRadio}
                  type="radio"
                  value="male"
                  id="male"
                  onChange={changeHandler}
                  name="gender"
                  checked={formValues.gender === "male"}
                />

                <label className={Styles.formLabel} htmlFor="male">
                  Male
                </label>

                <input
                  className={Styles.formRadio}
                  type="radio"
                  value="female"
                  id="female"
                  onChange={changeHandler}
                  name="gender"
                  checked={formValues.gender === "female"}
                />
                <label className={Styles.formLabel} htmlFor="female">
                  Female
                </label>

                <input
                  className={Styles.formRadio}
                  type="radio"
                  value="other"
                  id="other"
                  onChange={changeHandler}
                  name="gender"
                  checked={formValues.gender === "other"}
                />
                <label className={Styles.formLabel} htmlFor="other">
                  Other
                </label>
              </div>
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
                className={`${Styles.register} ${Styles.btn}`}
                type="submit"
                onClick={clickHandler}
              >
                {" "}
                Register{" "}
              </button>
            </div>
            <div className={Styles.other}>
              <Link to="/login">
                <button
                  className={`${Styles.btn} ${Styles.submits} ${Styles.logIn}`}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;

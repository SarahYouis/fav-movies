import { useState } from "react";

export default function UserForm() {


  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameErrors: null,
    emailErrors: null,
    userNameErrors: null,
    passwordErrors: null,
    confirmPasswordErrors: null,
  });

  const nameRegex = /^[a-zA-Z]{3,}$/;
  const emailRegex = /^[a-zA-Z]{3,}(@)[a-zA-Z]{3,}(.com)$/;
  const userNameRegex = /^[a-zA-Z]{3,}[^\s]$/; //(?!\s)
  const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == "name") {
      setErrors({
        ...errors,
        nameErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !nameRegex.test(e.target.value)
            ? "Enter Valid Name"
            : null,
      });
    }

    if (e.target.name == "email") {
      setErrors({
        ...errors,
        emailErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !emailRegex.test(e.target.value)
            ? "Enter Valid Email"
            : null,
      });
    }

    if (e.target.name == "userName") {
      setErrors({
        ...errors,
        userNameErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !userNameRegex.test(e.target.value)
            ? "Enter Valid User Name"
            : null,
      });
    }
    if (e.target.name == "password") {
      // console.log(user.password)
      setErrors({
        ...errors,
        passwordErrors:
          e.target.value.length == 0
            ? "this field is required"
            : e.target.value.length < 8
            ? "password can't be less than 8 characters"
            : !passwordRegex.test(e.target.value)
            ? "Enter Valid Password"
            : null,
      });
    }
    if (e.target.name == "confirmPassword") {
      //console.log(user.password)
      setErrors({
        ...errors,
        confirmPasswordErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !(e.target.value == user.password)
            ? " Password Don't Match"
            : null,
      });
    }
  };

  return (
    <div className="contaier">
      <form>
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${
                errors.nameErrors ? "border-danger" : ""
              }`}
              id="inputName"
              value={user.name}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.nameErrors}</small>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className={`form-control ${
                errors.emailErrors ? "border-danger" : ""
              }`}
              id="inputEmail"
              value={user.email}
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.emailErrors}</small>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputUserName" className="col-sm-2 col-form-label">
            User Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${
                errors.userNameErrors ? "border-danger" : ""
              }`}
              id="inputUserName"
              value={user.userName}
              name="userName"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.userNameErrors}</small>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className={`form-control ${
                errors.passwordErrors ? "border-danger" : ""
              }`}
              id="inputPassword"
              value={user.password}
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.passwordErrors}</small>
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="inputConfirmPassword"
            className="col-sm-2 col-form-label"
          >
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className={`form-control ${
                errors.confirmPasswordErrors ? "border-danger" : ""
              }`}
              id="inputConfirmPassword"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">
              {errors.confirmPasswordErrors}
            </small>
          </div>
        </div>
        
      </form>
    </div>
  );
}

import React from "react";
import "./form.css";

const Form = () => {
  const [inputVal, setInputValue] = React.useState({
    userName: "",
    password: "",
  });

  const [errorUserName, setErrorUserName] = React.useState(false);
  const [errorUserPassword, setErrorUserPassword] = React.useState(false);

  const { userName, password } = inputVal;

  const handleErrorUserName = (e) => {
    const { value, name } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
    if (!value) {
      setErrorUserName(true);
    } else {
      setErrorUserName(false);
    }
  };

  const handleErrorPassword = (e) => {
    const { value, name } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));

    if (!value) {
      setErrorUserPassword(true);
    } else {
      setErrorUserPassword(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      console.log("Ok");
    }
  };

  return (
    <div className="container">
      <form className="form-block">
        <p className="form-title">Registration</p>
        <div className="form-inputs">
          <input
            type="text"
            className={errorUserName ? "form-controls error" : "form-controls"}
            placeholder="Enter your user name"
            value={userName}
            name={"userName"}
            onChange={handleErrorUserName}
          />
          {errorUserName && (
            <span className="form-error">Please input your user name</span>
          )}
        </div>
        <div className="form-inputs">
          <input
            type="password"
            className={
              errorUserPassword ? "form-controls error" : "form-controls"
            }
            placeholder="Enter your password"
            value={password}
            name={"password"}
            onChange={handleErrorPassword}
          />
          {errorUserPassword && (
            <span className="form-error">Please input your password</span>
          )}
        </div>
        <button className="form-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

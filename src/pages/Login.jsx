import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
      <form className="w-50">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <Link to="/register">Forgot Password ? </Link>
        </div>
        <div>
          <button type="submit" className="btn btn-primary me-2">
            Login
          </button>
          <button type="submit" className="btn btn-primary">
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

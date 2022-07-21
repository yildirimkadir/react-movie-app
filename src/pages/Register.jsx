import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img
          src={"https://picsum.photos/800/800"}
          className="w-120"
          alt="sample-movie"
        />
      </div>
      <div className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
        <form className="w-75">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              placeholder="Enter your first name.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              aria-describedby="emailHelp"
              placeholder="Enter your last name.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email.."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password.."
              required
            />
          </div>
          <div className="mb-3">
            <Link to="/register">Forgot Password ? </Link>
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-2">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

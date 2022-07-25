import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../authent/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName);
  };

  return (
    <div className="main-container d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img
          src={
            "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg"
          }
          className="registerImg"
          alt="sample-movie"
        />
      </div>
      <div className="container mt-4 d-flex flex-column justify-content-center align-items-center">
        <form className="form mt-4" onSubmit={handleSubmit}>
          <h1 className="form-title display-4 mb-4 ">Register</h1>
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
              required
              onChange={(e) => setFirstName(e.target.value)}
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
              required
              onChange={(e) => setLastName(e.target.value)}
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
              required
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-2 w-25">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

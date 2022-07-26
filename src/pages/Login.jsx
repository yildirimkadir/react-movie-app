import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { forgotPassword, signIn, signUpProvider } from "../authent/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleWithGoogle = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="main-container d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img
          src={
            "https://mediafiles.reiseuhu.de/wp-content/uploads/2019/10/duesseldorf-rhein-rheinturm-1024x640.jpg"
          }
          className="registerImg"
          alt="sample-movie"
        />
      </div>
      <div className="container mt-1 d-flex flex-column justify-content-center align-items-center">
        <form className="form" onSubmit={handleLogin}>
          <h1 className="form-title display-4 mb-4 ">Login</h1>
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
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Link to="#" onClick={() => forgotPassword(email)}>
              Forgot Password ?{" "}
            </Link>
          </div>
          <div>
            <button type="submit" className="btn btn-primary me-2 w-25">
              Login
            </button>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={handleWithGoogle}
            >
              Continue with Google <FcGoogle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

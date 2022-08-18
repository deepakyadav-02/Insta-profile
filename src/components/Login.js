import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="main">
        <FacebookLogin
          className="g-btn"
          type="dark"
          onClick={handleFacebookSignIn}
        />
      </div>
    </>
  );
};

export default Login;

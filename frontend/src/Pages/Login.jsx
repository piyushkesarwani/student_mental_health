import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContextState } from "../Context/Context";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

    const { login } = authContextState()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      await login(inputs)
    //   console.log(res)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col justify-center items-center min-h-[100vh]">
      <Form className="border bg-cyan-400 p-3">
        <h2 className="text-center">Login Form</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="bg-blue-500 w-full text-white"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <p className="my-3 text-white">
          Already A member?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </Form>
    </section>
  );
};

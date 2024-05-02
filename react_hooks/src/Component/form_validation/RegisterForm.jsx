import React from "react";
import "./form.css";
import { useFormik } from "formik";
import { signUpSchemas } from "./schemas";

const initialValue = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const RegisterForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValue,
      validationSchema: signUpSchemas,
      onSubmit: (values,action) => {
        console.log(values);
      },
    });
  return (
    <div className="form">
      <h2>Form Validation</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="input_block">
          <label htmlFor="name" className="input_label">
            Enter your Name:{" "}
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && errors.touched ? (
            <p className="form-error">{errors.name}</p>
          ):null}
        </div>

        <div className="input_block">
          <label htmlFor="email" className="input_label">
            Enter your Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && errors.touched ? (
            <p className="form-error">{errors.email}</p>
          ):null}
        </div>

        <div className="input_block">
          <label htmlFor="password" className="input_label">
            Enter your Password:
          </label>
          <input
            type="text"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && errors.touched ? (
            <p className="form-error">{errors.password}</p>
          ):null}
        </div>

        <div className="input_block">
          <label htmlFor="confirm_password" className="input_label">
            Confirm Password:
          </label>
          <input
            type="text"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && errors.touched ? (
            <p className="form-error">{errors.confirm_password}</p>
          ):null}
        </div>

        <div className="model_button">
          <a href="#" className="">
            Want to Register using Gmail?
          </a>
          <button className="input-button" type="submit">
            Registration
          </button>
        </div>
      </form>

      <p className="sign-up">
        Already have an account? <a href="#">Sign up Now!</a>
      </p>
    </div>
  );
};

export default RegisterForm;

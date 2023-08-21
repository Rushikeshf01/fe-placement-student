import React, { useState } from "react";
import Link from "next/link";
import authClient from "@/network/authClient";
import { TextField, Button } from "@mui/material";
import { ApplicationConstant } from "@/constant/applicationConstant";
import Captcha from "../captcha/Captcha";
// import style from "./register.module.css"

const Register = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    cnfmPassword: "",
    isStudent: false,
  });

  const onSignup = async () => {
    try {
      console.log("data before signup", student);
      const response = await authClient.post("/accounts/user/signup/", {
        firstName: student.firstName,
        lastName: student.lastName,
        mobile: student.mobile,
        email: student.email,
        password: student.password,
      });
      console.log("signup success", response.data);
    } catch (error: any) {
      console.log("signup failed", error.msg);
    }
  };

  return (
    <>
      <p className="mt-6 text-3xl font-bold">Student Registration</p>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <TextField
          label="First Name"
          type="text"
          value={student.firstName}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, firstName: e.target.value });
          }}
        />
        <TextField
          label="Last Name"
          type="text"
          value={student.lastName}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, lastName: e.target.value });
          }}
        />
        <TextField
          label="Email"
          type="email"
          value={student.email}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, email: e.target.value });
          }}
        />
        <TextField
          label="Mobile"
          type="text"
          value={student.mobile}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, mobile: e.target.value });
          }}
        />
        <TextField
          label="Password"
          type="password"
          value={student.password}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, password: e.target.value });
          }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={student.cnfmPassword}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, cnfmPassword: e.target.value });
          }}
        />
      </div>
      <div className="mt-2">
        <Captcha />
      </div>
      <Button variant="outlined" className="mt-4" onClick={onSignup}>
        Sign Up
      </Button>
      <div className="mt-3.5">
        Already have an account?{" "}
        <Link
          href={ApplicationConstant.LOGIN_URL_PATH}
          className="font-semibold"
        >
          Login here
        </Link>
      </div>
    </>
  );
};

export default Register;

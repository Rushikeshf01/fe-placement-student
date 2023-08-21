import { ApplicationConstant } from "@/constant/applicationConstant";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Captcha from "../captcha/Captcha";

const Login = () => {
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    // try {
    //     axios
    // } catch (error:any) {
    //     console.log(error.msg)
    // }
  };

  return (
    <>
      <p className="mt-6 text-3xl font-bold">Login</p>
      <div className="grid grid-cols-1 gap-4 mt-3">
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
          label="Password"
          type="password"
          value={student.password}
          required
          variant="standard"
          onChange={(e) => {
            setStudent({ ...student, password: e.target.value });
          }}
        />
      </div>
      <div className="mt-2">
        <Captcha />
      </div>
      <Button variant="outlined" className="mt-4" onClick={onLogin}>
        Log in
      </Button>
      <div className="mt-3.5">
        {`Don't have an student account?`}{" "}
        <Link
          href={ApplicationConstant.REGISTER_URL_PATH}
          className="font-semibold"
        >
          Register here
        </Link>
      </div>
    </>
  );
};

export default Login;

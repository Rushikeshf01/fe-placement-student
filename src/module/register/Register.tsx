import React, { useState } from "react";
import Link from "next/link";
import authClient from "@/network/authClient";
import { TextField, Button } from "@mui/material";
import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import Captcha from "../captcha/Captcha";
import { joiUtils } from "@/utils/joiValidation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { RegisterInputType } from "@/utils/types";
// import style from "./register.module.css"

const Register = () => {
  const [userInput, setUserInput] = useState<RegisterInputType>({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });
  const captcha = useSelector((state: RootState) => state.extra.captchaValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClickRegister = () => {
    const { status, message } = joiUtils.validateRegisterData(userInput);
    if (status) {
      if (captcha === userInput.captcha) {
        callRegisterAPI();
      } else {
        // setFieldError("Invalid captcha value");
      }
    } else {
      // setFieldError(message);
      console.log(message);
    }
  };

  const callRegisterAPI = async () => {
    try {
      const response = await authClient.post(ApiConstant.POST_NEW_USER, {
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        mobile: userInput.mobile,
        email: userInput.email,
        password: userInput.password,
        isStudent: true,
      });
    } catch (error: any) {}
  };

  return (
    <>
      <p className="mt-6 text-3xl font-bold">Student Registration</p>
      <div className="grid grid-cols-2 gap-3 mt-2">
        <TextField
          value={userInput.firstName}
          onChange={handleOnChange}
          name="firstName"
          label="First Name"
          required
          variant="standard"
        />
        <TextField
          value={userInput.lastName}
          onChange={handleOnChange}
          name="lastName"
          label="Last Name"
          required
          variant="standard"
        />
        <TextField
          value={userInput.email}
          onChange={handleOnChange}
          name="email"
          label="Email"
          type="email"
          required
          variant="standard"
        />
        <TextField
          value={userInput.mobile}
          onChange={handleOnChange}
          name="mobile"
          label="Mobile"
          required
          variant="standard"
        />
        <TextField
          value={userInput.password}
          onChange={handleOnChange}
          name="password"
          label="Password"
          type="password"
          required
          variant="standard"
        />
        <TextField
          value={userInput.confirmPassword}
          onChange={handleOnChange}
          name="confirmPassword"
          label="Confirm Password"
          required
          variant="standard"
        />
        <TextField
          value={userInput.captcha}
          onChange={handleOnChange}
          name="captcha"
          label="Enter captcha here"
          required
          variant="standard"
        />
        <Captcha className="" />
      </div>

      <Button variant="outlined" className="mt-4" onClick={handleClickRegister}>
        Submit
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

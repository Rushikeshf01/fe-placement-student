import React, { useState } from "react";
import authClient from "@/network/authClient";
import { Typography, TextField, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
// import logo from ".../public/sou-logo.jpg"

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "Slider-Images/1.webp",
  },
  {
    label: "Second Picture",
    imgPath: "Slider-Images/2.webp",
  },
  {
    label: "Third Picture",
    imgPath: "Slider-Images/3.webp",
  },
];

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
    <div className="flex">
      <div className="w-1/3 flex flex-col h-screen justify-center items-center bg-gray-100">
        <Typography variant="h4" gutterBottom>
          <Image src="/sou-logo2.png" alt="Logo" width={17} height={20} className="w-17 h-20" />
        </Typography>
        <div className="w-full bg-gray-100 p-8">
          <p className="text-4xl">Register</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              // className="w-full md:w-1/2 pr-4 mb-4 md:mb-0"
              label="First Name"
              type="text"
              value={student.firstName}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, firstName: e.target.value });
              }}
            />
            <TextField
              // className="w-full md:w-1/2 pl mb-4 md:mb-0"
              label="Last Name"
              type="text"
              value={student.lastName}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, lastName: e.target.value });
              }}
            />
            <TextField
              // className="w-full md:w-1/2 pr-4 mb-4 md:mb-0"
              label="Email"
              type="email"
              value={student.email}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, email: e.target.value });
              }}
            />
            <TextField
              // className="w-full md:w-1/2 pl mb-4 md:mb-0"
              label="Mobile"
              type="text"
              value={student.mobile}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, mobile: e.target.value });
              }}
            />
            <TextField
              // className="w-full md:w-1/2 pr-4 mb-4 md:mb-0"
              label="Password"
              type="password"
              value={student.password}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, password: e.target.value });
              }}
            />
            <TextField
              // className="w-full md:w-1/2 pl mb-4 md:mb-0"
              label="Confirm Password"
              type="password"
              value={student.cnfmPassword}
              required
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => {
                setStudent({ ...student, cnfmPassword: e.target.value });
              }}
            />

            <Button variant="outlined" color="primary" onClick={onSignup}>
              Sign Up
            </Button>
          </form>

          <div className="pt-4">
            {/* <MuiLink
              component={Link}
              href="/login" // Adjust the path to your login page
              passHref // Pass the href to the anchor element
              color="primary"
            >
              Already have an account? Log In
            </MuiLink> */}
          </div>
          <Link href="/login" className="">
            Login here
          </Link>
        </div>
      </div>

      {/* slideshow */}
      <div className="w-2/3">
        <div className="w-full h-full bg-gray-200">
          <Typography variant="h4" gutterBottom>
            {/* Your logo image */}
            <Image
              src="/Slider-Images/1.webp"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;

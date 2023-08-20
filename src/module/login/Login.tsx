import { ApplicationConstant } from "@/constant/applicationConstant";
import Link from "next/link";
import React, { useState } from "react";

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
    <div>
      <h1>Login</h1>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={student.email}
        onChange={(e) => {
          setStudent({ ...student, email: e.target.value });
        }}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={student.password}
        onChange={(e) => {
          setStudent({ ...student, password: e.target.value });
        }}
      />
      <br />
      <button onClick={onLogin}>Login</button>
      <br />
      <Link href={ApplicationConstant.REGISTER_URL_PATH}>Register here</Link>
    </div>
  );
};

export default Login;

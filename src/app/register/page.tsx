"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import authClient from '@/network/AuthClient'

export default function RegisterPage() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName:"",
    mobile:"",
    email:"",
    password:"",
    cnfmPassword:""
  })

  const onRegister = async () => {
    try {
        console.log("data before signup",student);
        const response = await authClient.post("/accounts/user/signup/",student);
        // const response = await authClient.post("/accounts/user/signup/",{
        //     firstName: student.firstName,
        //     lastName: student.lastName,
        //     mobile: student.mobile,
        //     email: student.email,
        //     password: student.password
        // });
        console.log("signup success",response.data);
    } catch (error:any) {
        console.log("signup failed",error.msg)
    }
  }
  return (
    <>
        <h1>Register</h1>
        <label htmlFor="firstName">First Name: </label>
        <input 
            type="text"
            id="firstName" 
            value={student.firstName}
            onChange={(e) => {setStudent({...student, firstName: e.target.value})}}
        />
        <br/>
        <label htmlFor="LastName">Last Name: </label>
        <input 
            type="text"
            id="LastName" 
            value={student.lastName}
            onChange={(e) => {setStudent({...student, lastName: e.target.value})}}
        />
        <br/>
        <label htmlFor="mobile">Mobile: </label>
        <input 
            type="number"
            id="mobile" 
            value={student.mobile}
            onChange={(e) => {setStudent({...student, mobile: e.target.value})}}
        />
        <br/>
        <label htmlFor="email">Email: </label>
        <input 
            type="email"
            id="email" 
            value={student.email}
            onChange={(e) => {setStudent({...student, email: e.target.value})}}
        />
        <br/>
        <label htmlFor="password">Password: </label>
        <input 
            type="password"
            id="password" 
            value={student.password}
            onChange={(e) => {setStudent({...student, password: e.target.value})}}
        />
        <br/>
        <label htmlFor="cnfm-password">Confirm Password: </label>
        <input 
            type="password"
            id="cnfm-password" 
            value={student.cnfmPassword}
            onChange={(e) => {setStudent({...student, cnfmPassword: e.target.value})}}
        />
        <br />
        <button onClick={onRegister}>Register</button>
        <br />
        <br />
        <Link href='/login'>Login here</Link>
    </>
  )
}

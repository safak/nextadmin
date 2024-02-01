"use client"

import { authenticate } from "@/app/lib/actions"
import styles from "./loginForm.module.css"
// import { useState } from "react"
import {useFormState} from "react-dom"

const LoginForm = () => {

  const [state, formAction] = useFormState(authenticate, undefined);
  // console.log("State: ", state)
  
  // const [err, setErr] = useState()
  
  // const handleLogin = async (formData) => {
  //   const data = await authenticate(formData)
  //   data.error && setErr(data.error)
  // }

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
}

export default LoginForm;
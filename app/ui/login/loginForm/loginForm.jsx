// "use client"
// import { authenticate } from "@/app/lib/actions"
// import styles from "./loginForm.module.css"
// import { useState } from "react"

// const LoginForm = () => {

//   const [err,setErr] = useState()
//   const handleLogin = async (formData) => {
//     const data = await authenticate(formData)
//     data.error && setErr(data.error)
//   }
//   return(
//       <form action={handleLogin} className={styles.form}>
//         <h1 className={styles.title}>Login</h1>
//           <input type="text" placeholder="username" name="username"/>
//           <input type="password" placeholder="password" name="password"/>
//           <button> Login</button>
//           {err && err}
//       </form>
//   )
// }

// export default LoginForm;
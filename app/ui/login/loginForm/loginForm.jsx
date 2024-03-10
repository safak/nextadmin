"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  //   const [err, setErr] = useState();
  //   const handleLogin = async (formData) => {
  //     const data = await authenticate(formData);
  //     data.error && setErr(data.error);
  //   };

  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <p>To access dashboard, input the following:</p>
      <p>Username: guest</p>
      <p>Password: guest123</p>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;

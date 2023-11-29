import styles from "@/app/ui/login/login.module.css";
import { authenticate } from "../lib/actions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

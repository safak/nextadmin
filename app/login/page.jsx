import styles from "@/app/ui/login/login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

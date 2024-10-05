import styles from "../ui/login/login.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h3>Login</h3>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;
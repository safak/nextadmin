import styles from "../ui/login/login.module.css"

const Register = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Register;
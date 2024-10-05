import styles from "../ui/login/login.module.css"

const register = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default register;
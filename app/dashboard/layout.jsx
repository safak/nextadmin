import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import styles from '../ui/dashboard/dashboard.module.css'
import Footer from "../ui/dashboard/footer/footer";
import UsersPage from "../ui/dashboard/users/page";
const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <UsersPage/>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;
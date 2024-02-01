import Footer from "../ui/dashboard/footer/footer"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import styles from "../ui/dashboard/dashboard.module.css"

// const Layout = ({children, headerText}) => {
//     return(
//         <div className={styles.container}>
//             <div className={styles.menu}>
//                 <Sidebar />
//             </div>
//             <div className={styles.content}>
//                 <Navbar headerText={headerText} />
//                 {children}
//                 <Footer />
//             </div>
//         </div>
//     )
// }

const Layout = ({children, headerText}) => {
    return(
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Navbar headerText={headerText} />
            </div>
            <div className={styles.items}>
                <div className={styles.menu}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout;
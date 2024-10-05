import Search from "../../dashboard/search/search";
import styles from "../users/users.module.css"
import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination/pagination";

const ProductsPage = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user"/>
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>

            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><div className={styles.user}>
                        <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                        John Doe
                    </div>
                    </td>
                    <td>eldadfikre456@gmail.com</td>
                    <td>13.01.2012</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                        <div className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default ProductsPage;
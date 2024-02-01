import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";

const Products = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a products..."/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.productImage} /> iphone 14 Pro
                            </div>
                        </td>
                        <td>Lorem impum dolor sit amet</td>
                        <td>Rp26.000.000</td>
                        <td>Jan 09 2024</td>
                        <td>219</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.productImage} /> Xiaomi Monitor
                            </div>
                        </td>
                        <td>Lorem impum dolor sit amet</td>
                        <td>Rp1.100.000</td>
                        <td>Jan 09 2024</td>
                        <td>178</td>
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
            <Pagination />
        </div>
    )
};

export default Products;

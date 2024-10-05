import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination";
import {} from "next/navigation"
import axios from 'axios';
import {fetchMultipleFiles} from "../../../app/lib/data";
import {deleteProduct, telegramPosts} from "../../lib/actions";
import {Unstable_Popup as Popup } from "@mui/base";

const ProductsPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const {count, files} = await fetchMultipleFiles(q, page);

    const handleSendToTelegram = async () => {
        try {
            await axios.post('/api/send-message', { products: files });
            alert('Message sent to Telegram channel');
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
            alert('Failed to send message');
        }
    };
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search
                    placeholder="Search for a product"/>
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>

            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Condition</td>
                    <td>Make</td>
                    <td>Model</td>
                    <td>Created At</td>
                    <td>Stock</td>
                </tr>
                </thead>
                <tbody>
                {files.map(product => (
                    <tr key={product.id}>
                        <td>{product.Name}</td>
                        <td>{product.condition}</td>
                        <td>{product.make}</td>
                        <td>{product.price}</td>
                        <td>{new Date(product.createdAt).toLocaleString()}</td>
                        <td>
                            <div className={styles.user}>
                                {product.files && product.files.length > 0 ? (
                                    product.files.map((file, index) => (
                                        <Image
                                            key={index}
                                            src={`https://api.hulemekina.com/${file.filePath.replace(/\\/g, '/')}`}
                                            alt={`Product image ${index + 1}`}
                                            width={100}
                                            height={100}
                                            className={styles.productImage}
                                        />
                                    ))
                                ) : (
                                    <Image
                                        src="/noproduct.jpg"
                                        alt="No product image"
                                        width={40}
                                        height={40}
                                        className={styles.productImage}
                                    />
                                )}
                            </div>
                        </td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/products/${product.id}`}>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <form action={deleteProduct}>
                                    <input type="hidden" name="id" value={product.id}/>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </form>
                                <form action={telegramPosts}>
                                    <input type="hidden" name="id" value={product._id}/>
                                    <button className={`${styles.button} ${styles.view}`}>SendTelegram</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination count={count}/>
        </div>
    )
}

export default ProductsPage
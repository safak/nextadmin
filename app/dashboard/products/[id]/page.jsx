import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";


const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill/>
                </div>
                Hotdog
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Name</label>
                    <input type="text" name="title" placeholder="Harvey Samson"/>
                    <label>Type</label>
                    <input type="number" name="price" placeholder="normal"/>
                    <label>Report count</label>
                    <input type="number" name="stock" placeholder="99"/>
                    <label>Reason</label>
                    <input type="text" name="color" placeholder="red"/>
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="Ballas street"/>
                    
                    <label>Content</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="email">

                    </textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill/>
                </div>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="username" placeholder="John Doe"/>
                    <label>Price</label>
                    <input type="email" name="price" placeholder="JohnDoe@gmail.com"/>
                    <label>Stock</label>
                    <input type="password" name="stock" placeholder="Password"/>
                    <label>Color</label>
                    <input type="text" name="color" placeholder="+251"/>
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder="New York"/>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="description">
                    </textarea>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleProductPage;
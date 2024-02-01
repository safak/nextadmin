import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Fulan
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Fulan" />
          <label>Price</label>
          <input type="text" name="label" placeholder="Fulan@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="Fulan" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Teal" />
          <label>Size</label>
          <input type="number" name="size" placeholder="House" />
          <label>Cat</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="avatar.png" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="499.00" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="49" />
          <label>Color</label>
          <input type="text" name="color" placeholder="white" />
          <label>Size</label>
          <input type="text" name="size" placeholder="4'9" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="phone" selected>
              Phone
            </option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="16"
            placeholder="Description..."
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

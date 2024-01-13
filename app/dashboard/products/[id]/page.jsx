import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

export default async function SingleProductPage({ params }) {
  const product = await fetchProduct(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/noavatar.png"}
            alt="An unknown person"
            fill
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input name="id" value={product.id} type="hidden" />
          <label>Title</label>
          <input type="text" name="title" defaultValue={product.title} />
          <label>Price</label>
          <input type="number" name="price" defaultValue={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" defaultValue={product.stock} />
          <label>Color</label>
          <input type="text" name="color" defaultValue={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" defaultValue={product.size} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            defaultValue={product.desc}
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
}

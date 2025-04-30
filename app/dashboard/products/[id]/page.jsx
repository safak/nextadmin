
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductPage = async ({params}) => {
  const {id} = params
  const product = await fetchProduct(id)

  return(
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
        <input type="hidden" name="id" value={product.id} />
        <label>Title</label>
        <input type="text" name ="title" placeholder={product.title}/><br/>
        <label>Price</label>
        <input type="number" name ="price" placeholder={product.price}/>
        <label>Stock</label>
        <input type="number" name ="stock" placeholder={product.stock}/>
        <label>Color</label>
        <input type="text" name ="color" placeholder={product.color}/>
        <label>Size</label>
        <input type="number" name ="size" placeholder={product.size}/>
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="residential">Residential</option>
          <option value="industrial">Industrial</option>
        </select>
        <label>Description</label>
        <textarea type="text" name ="desc" rows= "10" placeholder="Description"/>
        <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default  SingleProductPage;
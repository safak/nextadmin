import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css';
import {addProduct} from "../../../lib/actions";

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder='title' name='title' required/>
                <select name="car" id="">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder='stock' name="stock"/>
                <input type="number" placeholder='price' name="price"/>
                <input type="text" placeholder='color' name="color"/>
                <input type="text" placeholder='size' name="size"/>
                <textarea name="description" id="desc" rows="16">
                    <button type="submit">Submit</button>
                </textarea>
            </form>
        </div>
    )
}

export default AddProduct;
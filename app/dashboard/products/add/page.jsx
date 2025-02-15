import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="title" name="title" required/>
                <select name="cat" id="cat">
                    <option value="general">Choose category</option>
                    <option value="dog">Dog</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="mall">Mall</option>
                </select>
                <input type="number" placeholder="price" name="price"/>
                <input type="number" placeholder="stock" name="stock"/>
                <input type="text" placeholder="color" name="color"/>
                <input type="text" placeholder="size" name="size"/>
                <textarea 
                name="desc" 
                id=""
                cols="30"
                rows="16"
                placeholder="Description"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage
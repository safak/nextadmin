import styles from './product.module.css'
import Image from 'next/image';
const item = [
    {
      title:"pages",
      list:[
        {
          title:"Dashboard",
          path:"/dashboard",
          
        },
        {
          title:"Users",
          path:"/dashboard/users",
          
        },
        {
          title:"Products",
          path:"/dashboard/products",
         
        },
        {
          title:"Transactions",
          path:"/dashboard/transactions",
          
        }
      ]
    },

];
const Product = ({}) => {


  return <div className={styles.container}>
    <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img className={styles.image} src="/avatar.png" layout=""></img>
          </div>
          <div className={styles.desc}>
            <div className={styles.title}>WITCH SPELL</div>
            <div className={styles.price}>From ~ $80</div>

          </div>
          
        </div>
    </div>


  </div>
}

export default Product
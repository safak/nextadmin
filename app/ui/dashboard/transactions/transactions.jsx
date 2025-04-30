import Image from "next/image"
import styles from "./transactions.module.css"


const Transactions = () => {


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Latest Transactions
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Driver Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
          <div className={styles.user}>
            <Image src = "/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
            Fran Kirby
            </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
          </td>
          <td>
            <span className={styles.date}>2021-01-01</span>
          </td>
          <td>
            <span className={styles.amount}>10tonnes</span>
          </td>
          </tr>
          <tr>
          <td>
            <div className={styles.user}>
            <Image src = "/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
            Bryan Germaine
            </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.done}`}>Done</span>
          </td>
          <td>
            <span className={styles.date}>2021-01-01</span>
          </td>
          <td>
            <span className={styles.amount}>400tonnes</span>
          </td>
          </tr>
          <tr>
          <td>
          <div className={styles.user}>
            <Image src = "/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
            Nick Pope
          </div>
          </td>
          <td>
            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
          </td>
          <td>
            <span className={styles.date}>2021-01-01</span>
          </td>
          <td>
            <span className={styles.amount}>10tonnes</span>
          </td>
          </tr>
        </tbody>
      </table>
      <div className="">

      </div>
    </div>
  )
}

export default Transactions
import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/michael.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <span>Michael Darwin</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>04.22.2025</td>
            <td>$23,452</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/adenugya.jpeg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <span>Adenugya Shafar</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>01.02.2025</td>
            <td>$69,999</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/jane.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <span>Jane Foster</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>07.17.2025</td>
            <td>$2,032</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/peter.jpeg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                <span>Peter Parker</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.21.2025</td>
            <td>$1,124</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

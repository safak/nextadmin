import Card from "../ui/card/card"
import Chart from "../ui/chart/chart"
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from "../ui/rightbar/rightbar"
import Transactions from "../ui/transactions/transactions"

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard
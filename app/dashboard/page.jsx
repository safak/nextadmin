import Rightbar from "../ui/dashboard/rightbar/rightbar"
import Calls from "../ui/dashboard/callStatus/callStatus"
import Campaign from "../ui/dashboard/campaign/campaign"
import Status from "../ui/dashboard/campStatus/campStatus"
import Chart from "../ui/dashboard/chart/chart"
import Stats from "../ui/dashboard/stats/stats";
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Campaign/>
          <Status/>
          <Calls/>
        </div>
        <Stats/>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  );
};

export default Dashboard;
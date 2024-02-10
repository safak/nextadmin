import styles from "../ui/dashboard/dashboard.module.css";
import Sidebar from "../ui/sidebar";
import Navbar from "../ui/dashboard/navbar";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./homepage.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard">
        <button className={styles.button}>Go To Your Dashboard</button>
      </Link>
    </div>
  );
}

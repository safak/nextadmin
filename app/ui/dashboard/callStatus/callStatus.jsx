import { MdLocalPhone } from "react-icons/md";
import styles from './callStatus.module.css';

const Calls = () => {
    return (
        <div className={styles.container}>
            <MdLocalPhone size ={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Calls</span>
                <span className={styles.number}>1000</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>Outbound Calls</span>
                </span>
            </div>
        </div>
    )
}

export default Calls;
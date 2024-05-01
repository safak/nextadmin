import { MdOutlineMoving } from "react-icons/md";
import styles from './campStatus.module.css';

const Status = () => {
    return (
        <div className={styles.container}>
            <MdOutlineMoving size ={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Campaign Status</span>
                <span className={styles.number}>50</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>In Progress</span>
                </span>
            </div>
        </div>
    )
}

export default Status;
import Image from 'next/image';
import styles from './rightbar.module.css';

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.tex}>
                    <span className={styles.notification}>Regional Map</span>
                </div>
                <div className={styles.bgContainer}>
                    <Image className={styles.bg} src="/Ugandamap.png" alt='' fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.subtitle}>Percentage Response Per Region</span>
                    <ul className={styles.list}>
                        <li>Central Region - 45%</li>
                        <li>Western Region - 63%</li>
                        <li>Northern Region - 73%</li>
                        <li>Eastern Region - 64%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
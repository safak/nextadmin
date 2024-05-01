import styles from './stats.module.css';
import Image from 'next/image';

const Stats = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Call Statistics</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Contact</td>
                        <td>Campaign</td>
                        <td>Status</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                src="/noavatar.png" 
                                alt="User Image" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            +256784922032
                            </div>
                        </td>
                        <td>Polio Vaccination</td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>done
                            </span>
                        </td>
                        <td>19.04.2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                src="/noavatar.png" 
                                alt="User Image" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            +256784922032
                            </div>
                        </td>
                        <td>Malaria Sensitisation</td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>cancelled
                            </span>
                        </td>
                        <td>1.05.2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                src="/noavatar.png" 
                                alt="User Image" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            +256784922032
                            </div>
                        </td>
                        <td>Polio Vaccination</td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                src="/noavatar.png" 
                                alt="User Image" 
                                width={40} 
                                height={40} 
                                className={styles.userImage}
                            />
                            +256784922032
                            </div>
                        </td>
                        <td>USE Resumption</td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>done
                            </span>
                        </td>
                        <td>18.03.2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stats
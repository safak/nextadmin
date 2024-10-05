import styles from './rightbar.module.css';
import Image from "next/image";
import {MdPlayCircleFilled, MdReadMore} from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.container}>
                    <Image src="" alt="" fill=""/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                         Avaiable Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut
                        commodi cum dolorem dolorum eligendi excepturi illo, labore laudantium modi odit placeat porro
                        quia quisquam temporibus totam vel velit voluptatibus.</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.container}>
                    <Image src="" alt="" fill="" className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>
                         Avaiable Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut
                        commodi cum dolorem dolorum eligendi excepturi illo, labore laudantium modi odit placeat porro
                        quia quisquam temporibus totam vel velit voluptatibus.</p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;
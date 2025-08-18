import styles from './card.module.css';
import { MdOutlineLocationOn } from 'react-icons/md';

const Card3 = ({ awsNumber, location }) => {
    return (
        <div className={styles.container}>
            <MdOutlineLocationOn size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>AWS Station {awsNumber}</span>
                <span className={styles.details}>Loc: {location}</span>
            </div>
        </div>
    );
};

export default Card3;

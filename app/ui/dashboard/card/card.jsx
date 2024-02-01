"use server"
import { MdHelpCenter } from 'react-icons/md';
import styles from './card.module.css'
// import { newsCount, newsCountToday } from '@/app/lib/datas/news';

const Card = async ({icon, head, count, desc}) => {
  const totalNews = count; 
  return (
    <div className={styles.container}>
      {/* <MdSupervisedUserCircle size={38} color="#2e3743" /> */}
      {icon || <MdHelpCenter size={38} color="#2e3743" />}
      <div className={styles.text}>
        <span className={styles.title}>{head}</span>
        <span className={styles.number}>{totalNews}</span>
        <span className={styles.detail}>{desc}</span>
      </div>
    </div>
  );
}

export default Card;
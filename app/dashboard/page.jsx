import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import Table from '../ui/dashboard/table/table'
import Card2 from '../ui/dashboard/card/card2'
import Card3 from '../ui/dashboard/card/card3'

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card2/>
                    <Card3/>
                </div>
                <Table/>
            </div>
        </div>
    )
}

export default Dashboard
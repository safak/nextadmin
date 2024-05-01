import { MdOutlineCampaign } from "react-icons/md";
import styles from './campaign.module.css';
import Link from 'next/link'

const Campaign = () => {
    return (
        <div className={styles.container}>
            <MdOutlineCampaign size ={24} />
            <div className={styles.texts}>
                <span className={styles.title}>New Campaign</span>
                <Link href="/dashboard/campaigns/addCallCampaign">
                    <button className={styles.button}>Add New</button>
                </Link>
            </div>
        </div>
    )
}

export default Campaign;